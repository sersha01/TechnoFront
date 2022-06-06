import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
  const [errUser, setErrUser] = useState(false);
  const [user_is, setUser_is] = useState(()=>localStorage.getItem('user_is') ? JSON.parse(localStorage.getItem('user_is')) :null);
  const [notification, setNotification] = useState(()=>localStorage.getItem('notification') ? JSON.parse(localStorage.getItem('notification')) : null);
  const [profile, setProfile] = useState(null);
  const [domains, setDomains] = useState(null);
  const [signUpBatch, setSignUpBatch] = useState(null);
  const [studentTasks, setStudentTasks] = useState(null);
  const [studentManifest, setStudentManifest] = useState(null);
  const [curr_manifest, setCurr_manifest] = useState(null);
  const [curr_student, setCurr_student] = useState(null);
  const [curr_group, setCurr_group] = useState(null);
  const [reviewers, setReviewers] = useState(null);
  const [swap, setSwap] = useState("video");
  const [swap2, setSwap2] = useState("video");

  
  const signupUser = async ({ username, email, password}) => {
    const check = user_is === "advisor" ? true : false;
    const batch = signUpBatch ? signUpBatch : 0;
    await axios
      .post("http://127.0.0.1:8000/user/signup", {
        username: username,
        email: email,
        password: password,
        batch: batch,
        is_staff: check,
      })
      .then((res) => {
        console.log(res.data);
        stndingData(username, password);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err);
      });
  };

  const signupAdvisor = async ({ username, email, password}) => {
    console.log(username, email, password);
    await axios
      .post("http://127.0.0.1:8000/user/signup", {
        username: username,
        email: email,
        password: password,
        batch: null,
        is_student: false,
        is_staff: true,
      })
      .then((res) => {
        console.log(res.data);
        stndingData(username, password);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err);
      });
  };

  const userDept = async (link) => {
    console.log(link.access);
    await axios
      .post(
        "http://127.0.0.1:8000/user/notification",
        {},
        {
          headers: { Authorization: `Bearer ${link.access}` },
        }
      )
      .then((res) => {
        setUser_is(res.data.dept);
        setNotification(res.data.notification);
        localStorage.setItem("user_is", JSON.stringify(res.data.dept));
        localStorage.setItem(
          "notification",
          JSON.stringify(res.data.notification)
        );
        if (res.data.dept == "lead") {
          navigate("/lead");
        } else if (res.data.dept == "advisor") {
          navigate("/advisor");
        } else if (res.data.dept == "student") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("error called");
        console.log(err);
      });
  };

  const stndingData = async (username, password) => {
    await axios
    .post("http://127.0.0.1:8000/user/token", { username, password })
    .then((res) => {
      setAuthTokens(res.data);
      console.log(JSON.stringify(res.data));
      console.log(jwt_decode(JSON.stringify(res.data)).position);
      setUser(jwt_decode(JSON.stringify(res.data)));
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      userDept(res.data);
    });
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    stndingData(username, password);
  };

  const logoutUser = async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user_is");
    localStorage.removeItem("notification");
    navigate("/signin");
  };

  const getMyProfile = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/view/profile",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDomains = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/view/domain",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setDomains(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReviewers = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/admins/view/reviewers",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setReviewers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudentTasks = async (studentId) => {
    await axios.post('http://127.0.0.1:8000/manifest/view/tasklist',{'id':studentId},{
        headers: {Authorization : `Bearer ${authTokens.access}`}
    }).then(res=>{
        setStudentTasks(res.data)
        console.log(res.data)
        if (user_is == "student") {
          navigate('/taskslist')
        }else {
        navigate('/advisor/group/taskslist')
        }
    }).catch(err=>{
        console.log(err)
    })
  };

  const getStudentManifest = async (manifestId) => {
    await axios.post('http://127.0.0.1:8000/manifest/view/manifest',{'id':manifestId},{
        headers: {Authorization : `Bearer ${authTokens.access}`}
    }).then(res=>{
        setStudentManifest(res.data)
        console.log(res.data)
    }).catch(err=>{
        console.log(err)
    })

  };

  const isCodeValid = async (code) => {
    const res = await axios.post('http://127.0.0.1:8000/user/validate/code',{'code':code},{})
    return res
  }

  const updateProfile = async (e) => {
    e.preventDefault();
    console.log("present here");
    console.log(e.target);
    var dob = null
    var domain = null
    if (user_is == "student"){
      var dob = e.target.dob.value
      var domain = e.target.domain.value
    }
    

    await axios
      .post(
        "http://127.0.0.1:8000/user/update/profile",
        {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          dob: dob,
          domain: domain,
          address: e.target.address.value,
          education: e.target.education.value,
          college: e.target.college.value,
          experience: e.target.experience.value,
          company: e.target.company.value,
          email: e.target.email.value,
          mobile: e.target.mobile.value,
          village: e.target.village.value,
          designation: e.target.designation.value,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const get_data = async () => {
    axios
      .post(
        "http://127.0.0.1:8000/don/",
        {
          username: "username",
        },
        { headers: { Authorization: `Bearer ${authTokens.access}` } }
      )
      .then(function (response) {
        console.log(response.data);
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  const contextData = {

    signupUser,
    updateProfile,
    getStudentTasks,
    getStudentManifest,
    getDomains,
    loginUser,
    logoutUser,
    get_data,
    notification,
    studentTasks,
    studentManifest,
    domains,
    errUser,
    profile,
    user_is,
    user,
    swap,
    setSwap,
    swap2,
    setSwap2,
    setCurr_manifest,
    setCurr_group,
    setCurr_student,
    getReviewers,
    curr_manifest,
    curr_group,
    curr_student,
    reviewers,
    setStudentManifest,
    getMyProfile,
    authTokens,
    setProfile,
    isCodeValid,
    setSignUpBatch,
    setUser_is,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
