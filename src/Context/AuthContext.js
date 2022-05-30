import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    const [errUser, setErrUser] = useState(false);
    const [user_is, setUser_is] = useState(()=>localStorage.getItem('user_is') ? JSON.parse(localStorage.getItem('user_is')) :null);
    const [notification, setNotification] = useState(()=>localStorage.getItem('notification') ? JSON.parse(localStorage.getItem('notification')) : null);
    const [profile, setProfile] = useState(null);
    const [advisorsNmaes, setAdvisorsNames] = useState(null);
    const [batches, setBatches] = useState(null);
    const [domains, setDomains] = useState(null);
    const [groups, setGroups] = useState(null);
    const [advisors, setAdvisors] = useState(null);
    const [groupDetails, setGroupDetails] = useState(null);
    const [groupLessers, setGroupLessers] = useState(null);
    const [myStudents, setMyStudents] = useState(null);
    const [myGroups, setMyGroups] = useState(null);
    const [myGroupDetails, setMyGroupDetails] = useState(null);
    const [students, setStudents] = useState(null);
    const [studentTasks, setStudentTasks] = useState(null);
    const [studentManifest, setStudentManifest] = useState(null);

    const navigate = useNavigate();

    const signupUser = async ({username,email,password,batch}) => {
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

  const loginUser = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
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
  };

  const logoutUser = async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user_is");
    localStorage.removeItem("notification");
    navigate("/signin");
  };

  const getAdvisorsNames = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/admins/view/advisors/names",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setAdvisorsNames(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewStudents = async () => {
    const res = await axios
      .get(
        "http://127.0.0.1:8000/student/view/students",
        
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBatches = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/batches",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setBatches(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfile = async () => {
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

  const createBatch = async (batch, advisor, location) => {
    console.log(advisor, location, batch);
    await axios
      .post(
        "http://127.0.0.1:8000/batch/create/batch",
        {
          advisor: advisor,
          location: location,
          batchno: batch,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getBatches();
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

  const getGroups = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/groups",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setGroups(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createGroup = async (batch, name, advisor, domain) => {
    console.log(batch, name, advisor, domain);
    await axios
      .post(
        "http://127.0.0.1:8000/batch/create/group",
        {
          batch: batch,
          name: name,
          advisor: advisor,
          domain: domain,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getGroups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteGroup = async (groupId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/delete/group",
        { id: groupId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getGroups();
        navigate("/lead/groups");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createDomain = async (domain) => {
    await axios
      .post(
        "http://127.0.0.1.:8000/user/create/domain",
        {
          name: domain,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getDomains();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAdvisors = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/admins/view/advisors",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setAdvisors(res.data);
        console.log("qwertyuiop", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDomain = async (domainId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/user/delete/domain",
        { id: domainId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getDomains();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMyStudents = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/student/view/mystudents",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setMyStudents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMyGroupDetails = async (groupId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/mygroup/details",
        { id: groupId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setMyGroupDetails(res.data);
        console.log(res.data);
        navigate("/advisor/group");
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
  }

  const getMyGroups = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/mygroups",
        {},
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setMyGroups(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudentManifest = async (manifestId) => {
    await axios.post('http://127.0.0.1:8000/manifest/view/manifest',{'id':manifestId},{
        headers: {Authorization : `Bearer ${authTokens.access}`}
    }).then(res=>{
        setStudentManifest(res.data)
        console.log(res.data)
        if (user_is == "student") {
          navigate('/manifest')
        }else {
        navigate('/advisor/group/manifest')
        }
    }).catch(err=>{
        console.log(err)
    })
  };

  const getGroupDetails = async (groupId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/group/details",
        { id: groupId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setGroupDetails(res.data);
        console.log("datas", res.data);
        navigate("/lead/groups/manage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGroupLess = async () => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/view/group/less",
        {
          domain: groupDetails.domain,
          batch: groupDetails.batch,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        setGroupLessers(res.data);
        console.log("datas", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addInGroup = async (userId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/add/group",
        {
          student: userId,
          group: groupDetails.id,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getGroupDetails(groupDetails.id);
        getGroupLess(groupDetails.domain);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rmFromGroup = async (userId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/remove/group",
        {
          student: userId,
        },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getGroupDetails(groupDetails.id);
        getGroupLess(groupDetails.domain);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBatch = async (batchId) => {
    await axios
      .post(
        "http://127.0.0.1:8000/batch/delete/batch",
        { id: batchId },
        {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        getBatches();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    console.log("present here");
    console.log(e.target);

    await axios
      .post(
        "http://127.0.0.1:8000/user/update/profile",
        {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          domain: e.target.domain.value,
          dob: e.target.dob.value,
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
            getAdvisorsNames,
            getProfile,
            getGroups,
            getGroupDetails,
            getMyStudents,
            updateProfile,
            deleteBatch,
            createDomain,
            getMyGroups,
            addInGroup,
            rmFromGroup,
            getMyGroupDetails,
            getStudentTasks,
            getStudentManifest,
            deleteDomain,
            getDomains,
            createBatch,
            deleteGroup,
            createGroup,
            deleteGroup,
            getAdvisors,
            getGroupLess,
            loginUser,
            logoutUser,
            getBatches,
            get_data,
            viewStudents,
            students,
            notification,
            advisorsNmaes,
            studentTasks,
            studentManifest,
            myStudents,
            myGroups,
            batches,
            domains,
            advisors,
            myGroupDetails,
            groupDetails,
            groupLessers,
            groups,
            errUser,
            profile,
            user_is,
            user,
        };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
