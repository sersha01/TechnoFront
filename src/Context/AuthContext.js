import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [errUser, setErrUser] = useState();
  const [profile, setProfile] = useState(null);
  const [domains, setDomains] = useState(null);
  const [signUpBatch, setSignUpBatch] = useState(null);
  const [studentTasks, setStudentTasks] = useState(null);
  const [studentManifest, setStudentManifest] = useState(null);
  const [curr_manifest, setCurr_manifest] = useState(null);
  const [curr_student, setCurr_student] = useState(null);
  const [curr_group, setCurr_group] = useState(null);
  const [reviewers, setReviewers] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [swap, setSwap] = useState("video");
  const [swap2, setSwap2] = useState("video");


  
  const signupUser = async ({ username, email, password}) => {
    const check = signUpBatch === 0 ? true : false;
    await axios
      .post("http://127.0.0.1:8000/user/signup", {
        username: username,
        email: email,
        password: password,
        batch: signUpBatch,
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

  const stndingData = async (username, password) => {
    await axios
    .post("http://127.0.0.1:8000/user/token", { username, password })
    .then((res) => {
      setAuthTokens(res.data);
      setUser(jwt_decode(res.data.access));
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      const position = jwt_decode(res.data.access).position
      if (position === "Admin") {
        navigate("/admin");
      } else if (position === "Advisor") {
        navigate("/advisor");
      } else if (position === "Communication") {
        navigate("/");
      } else if (position === "Finance") {
        navigate("/finance");
      } else if (position === "Lead") {
        navigate("/lead");
      } else if (position === "Placement") {
        navigate("/placement");
      } else if (position === "Student") {
        navigate("/");
      }
    }).catch((err) => {
      setErrUser("Username or Password is incorrect");
    })
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
    localStorage.removeItem("notification");
    setSwap("video");
    setSwap2("video");
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
        console.log(res.data);
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
    await axios
      .post(
        "http://127.0.0.1:8000/manifest/view/tasklist",
        { id: studentId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setStudentTasks(res.data);
        console.log(res.data);
        if (user.position == "Student") {
          navigate("/taskslist");
        } else {
          navigate("/advisor/group/taskslist");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getChartData = async () => {
    await axios.get('http://127.0.0.1:8000/manifest/view/chartdata', {
      headers: { Authorization: `Bearer ${authTokens.access}` },
    }).then((res) => {
      setChartData(res.data);
    }).catch((err) => {
      console.log(err);
    })}

  const getStudentManifest = async (manifestId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/manifest/view/manifest",
        { id: manifestId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setStudentManifest(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isCodeValid = async (code) => {
    const res = await axios.post('http://127.0.0.1:8000/user/validate/code',{'code':code},{})
    return res
  }

  const updateProfile = async (e) => {
    e.preventDefault();
    var domain = null;
    if (user.position == "Student") {
      var domain = e.target.domain.value;
    }
    await axios
      .post(
        "http://127.0.0.1:8000/user/update/profile",
        {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          dob: e.target.dob.value,
          domain: domain,
          gender: e.target.gender.value,
          email: e.target.email.value,
          mobile: e.target.mobile.value,
          father: e.target.father.value,
          father_contact: e.target.father_contact.value,
          mother: e.target.mother.value,
          mother_contact: e.target.mother_contact.value,
          guardian: e.target.guardian.value,
          relation: e.target.relation.value,
          address: e.target.address.value,
          village: e.target.village.value,
          taluk: e.target.taluk.value,
          education: e.target.education.value,
          college: e.target.college.value,
          experience: e.target.experience.value,
          company: e.target.company.value,
          designation: e.target.designation.value,
        }
        ,
        {
          headers: { Authorization: `Bearer ${authTokens.access}`, "Content-Type": "application/json" },
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

  const[amount, setAmount] = useState(0);
  const[month, setMonth] = useState(0);
  let year =  new Date().getFullYear();
  const [paid, setPaid] = useState(0);
  const [status, setStatus] = useState(0);

  const showPayment = async () => {
    await axios.post(
      "http://127.0.0.1:8000/payment/pay",
      {},
      { headers: { Authorization: `Bearer ${authTokens.access}` } },
    ).then((res) => {
      console.log(res.data);

      if (res.data == "Negative") {
        console.log("No payments pending")
      }
      else{
        setAmount(res.data.amount);
        setMonth(res.data.month);
        setStatus(res.data.status);

        console.log("Month is ", res.data.amount);
        console.log("Amount is ", res.data.month);
      }
      
    })
  }

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
    studentTasks,
    studentManifest,
    domains,
    errUser,
    profile,
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
    showPayment,
    amount,
    month,
    year,
    status,
    getChartData,
    chartData,
    isCodeValid,
    setSignUpBatch,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
