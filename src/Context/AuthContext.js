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
    const [user_is, setUser_is] = useState(()=>localStorage.getItem('user_is') ? JSON.parse(localStorage.getItem('user_is')) :null);
    const [notification, setNotification] = useState(()=>localStorage.getItem('notification') ? JSON.parse(localStorage.getItem('notification')) : null);
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    const signupUser = async ({username,email,password,batch}) => {
        // const response = 
        console.log(username,email,password,batch);
        await axios.post('http://127.0.0.1:8000/user/signup', {
            'username':username,
            'email':email,
            'password':password,
            'batch':batch,
            'is_student':true,
            'is_staff':false
        }).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err.response.data);
            console.log(err)
        })
    }

    const userDept = async (link) => {
        await axios.post('http://127.0.0.1:8000/user/notification',{},{
            headers: {Authorization : `Bearer ${link.access}`}
        }).then(res=>{
            setUser_is(res.data.dept) 
            setNotification(res.data.notification)
            localStorage.setItem('user_is',JSON.stringify(res.data.dept))
            localStorage.setItem('notification',JSON.stringify(res.data.notification))
            if (res.data.dept == 'lead') {
                navigate('/lead')
            } else if (res.data.dept == 'advisor') {
                navigate('/advisor')
            } else if (res.data.dept == 'student') {
                navigate('/')
            }
        }).catch(err=>{
            console.log('error adichu');
            console.log(err)
        })
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const username= e.target.username.value;
        const password= e.target.password.value;
        await axios.post('http://127.0.0.1:8000/user/token', {username,password}).then((res)=>{
            setAuthTokens(res.data);
            setUser(jwt_decode(JSON.stringify(res.data)));
            localStorage.setItem('authTokens', JSON.stringify(res.data));
            userDept(res.data);
        })
    }

    const logoutUser = async () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('authTokens');
      localStorage.removeItem('user_is');
        localStorage.removeItem('notification');
      navigate('/signin');
    }

    const getProfile = async () => {
        await axios.post('http://127.0.0.1:8000/user/view/profile',{},{
            headers: {Authorization : `Bearer ${authTokens.access}`}
        }).then(res=>{
            setProfile(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const updateProfile = async (e) => {
        e.preventDefault()
        console.log('present here');
        console.log(e.target);

        await axios.post('http://127.0.0.1:8000/user/update/profile',{
            'first_name':e.target.first_name.value,
            'last_name':e.target.last_name.value,
            'domain':e.target.domain.value,
            'dob':e.target.dob.value,
            'address':e.target.address.value,
            'education':e.target.education.value,
            'college':e.target.college.value,
            'experience':e.target.experience.value,
            'company':e.target.company.value,
            'email':e.target.email.value,
            'mobile':e.target.mobile.value,
            'village':e.target.village.value,
            'designation':e.target.designation.value,
            // 'gender':'Male',

        },{
            headers: {Authorization : `Bearer ${authTokens.access}`}
        }).then(res=>{
            console.log(res.data)
            setProfile(res.data)
        }).catch(err=>{
            console.log(err)
        })
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
            getProfile,
            updateProfile,
            loginUser,
            logoutUser,
            get_data,
            notification,
            errUser,
            profile,
            user_is,
            user,
        };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}