import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";
import { set } from "react-hook-form";
import StyleContext from "./StyleContext";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const { successToast, warningToast, infoToast } = useContext(StyleContext);
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
  const [types, setTypes] = useState(null);

  const [rent, setRent] = useState(false);
  const [shiftpay, setShiftpay] = useState(false);
  const [upfront, setUpfront] = useState(false);
  
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
      } else if (position === "Outsider") {
        logoutUser();
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
        } else if (user.position == "Advisor") {
          navigate("/advisor/group/taskslist");
        } else if (user.position == "Lead") {
          navigate("/lead/students/taskslist");
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
    const res = await axios.post(
      "http://127.0.0.1:8000/user/validate/code",
      { code: code },
      {}
    );
    return res;
  };

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

  const getNotificationsTypes = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/types",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNotifications = async (type, content) => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/create/notification",
        {
          type: type,
          content: content,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNotifications = async (id) => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/delete/notification",
        { id: id },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState(0);
  const [rentid, setRentId] = useState(0);

  const showPayment = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/pay", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "Paid") {
          setRent(false);
        } else {
          setAmount(res.data.amount);
          setStatus(res.data.status);
          setRentId(res.data.id);
          setRent(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [upfrontstatus, setUpfrontstatus] = useState(0);
  const [upfrontamount, setUpfrontamount] = useState(0);
  const [upfrontid, setUpfrontId] = useState(0);

  const showUpFront = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/upfrontpay", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        if (res.data.status == "Paid") {
          setUpfront(false);
        } else {
          console.log(res.data);
          setUpfrontamount(res.data.amount);
          setUpfrontstatus(res.data.status);
          setUpfrontId(res.data.id);
          setUpfront(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [shiftamount, setShiftamount] = useState(0);
  const [shiftstatus, setShiftstatus] = useState(0);
  const [shiftid, setShiftId] = useState(0);

  const showShiftPayment = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/shiftpay", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        if (res.data.status != "Paid") {
          setShiftamount(res.data.amount);
          setShiftstatus(res.data.status);
          setShiftId(res.data.id);
          setShiftpay(true);
        } else {
          setShiftpay(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const displayRazorpay = async (amount, type, id) => {
    debugger;
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      warningToast("You are offline");
      return;
    }

    const options = {
      key: "rzp_test_aRq4XkP2vJ58Xt",
      currency: "INR",
      amount: amount * 100,
      name: "BrotoType",
      description: "Paying your Co-working rent ",

      handler: function (response) {
        payRent(amount, type, id);
        successToast("Payment Successful");
        infoToast("You have paid " + formatter.format(amount));
      },

      prefill: {
        name: "Michu",
        email: "m4michu123@gmail.com",
        contact: "9207404868",
      },
      
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const payRent = async (amount, type, id) => {
    await axios
      .post(
        "http://127.0.0.1:8000/payment/paying",
        {
          id: id,
          amount: amount,
          type: type,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        if (res.status == "Paid") {
          myPayments();
          if (type == "Rent") {
            setRent(false);
          } else if (type == "Upfront") {
            setUpfront(false);
          } else if (type == "BatchShift") {
            setShiftpay(false);
          }
        } else {
          if (type == "Rent") {
            showPayment();
          } else if (type == "Upfront") {
            showUpFront();
          } else if (type == "BatchShift") {
            showShiftPayment();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [mypay, setMypay] = useState(false);

  const myPayments = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/myPayments", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        setMypay(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [allpending, setAllpending] = useState(false);

  const allPendingPayments = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/pending", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        console.log(res.data);
        setAllpending(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [allpaid, setAllpaid] = useState(false);

  const allCompletedPayments = async () => {
    await axios
      .get("http://127.0.0.1:8000/payment/completed", {
        headers: { Authorization: `Bearer ${authTokens.access}` },
      })
      .then((res) => {
        console.log(res.data);
        console.log("Hello");
        setAllpaid(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cashpaid = async (id) => {
    await axios
      .post(
        "http://127.0.0.1:8000/payment/cashpaid",
        {
          id: id,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        allPendingPayments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendForm = async (id) => {
    await axios
      .post(
        "http://127.0.0.1:8000/payment/sendform",
        {
          id: id,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        allPendingPayments();
      })
      .catch((err) => {
        console.log(err);
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
    status,
    getChartData,
    chartData,
    isCodeValid,
    setSignUpBatch,
// <<<<<<< HEAD
// =======
    getNotificationsTypes,
    createNotifications,
    types,
    deleteNotifications,
    rent,
    shiftpay,
    upfront,
    showShiftPayment,
    showUpFront,
    upfrontamount,
    upfrontstatus,
    shiftamount,
    shiftstatus,
    loadScript,
    displayRazorpay,
    rentid,
    upfrontid,
    shiftid,
    myPayments,
    mypay,
    allpending,
    allPendingPayments,
    cashpaid,
    sendForm,
    allpaid,
    allCompletedPayments,
// >>>>>>> main
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
