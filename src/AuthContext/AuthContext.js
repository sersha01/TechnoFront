import { createContext, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router';


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    const [errUser, setErrUser] = useState(false);

    const navigate = useNavigate();

    const signupUser = async ({username,email,password}) => {
        const response = await axios.post('http://127.0.0.1:8000/signup/', {username,email,password});
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const username= e.target.username.value;
        const password= e.target.password.value;
        await axios.post('http://127.0.0.1:8000/token/', {username,password}).then((res)=>{
            setAuthTokens(res.data);
            setUser(JSON.stringify(res.data));
            localStorage.setItem('authTokens', JSON.stringify(res.data));
            navigate('/');
        })
    }

    const logoutUser = async () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('authTokens');
      navigate('/signin');
    }

    const get_data =  async () => {
      axios.post('http://127.0.0.1:8000/don/' ,{
        username: 'username',
        }, { headers: {Authorization : `Bearer ${authTokens.access}`} })
          .then(function (response) {
              //handle success
              console.log(response.data);
              console.log(response);
          })
          .catch(function (response) {
              //handle error
              console.log(response);
          });
          }

        const contextData = {
            signupUser,
            loginUser,
            logoutUser,
            get_data,
            errUser,
            user,
        };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}