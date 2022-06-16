// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//////////////########//////////////
import Profile from "./components/Common/Profile/Profile";
import Manifest from "./components/Common/Manifest/Manifest";
import Tasks from "./components/Common/Tasks/Tasks"; 
import Pending from "./components/Common/Pending/Pending";
////////////////////////////////////
import Student from "./pages/User/Student";
import StudentSpace from "./components/User/Space/MySpace";
import MyPayment from "./components/User/Payment/Payment"
////////////////////////////////////
import Advisor from "./pages/Advisor/Advisor";
import MyGroup from "./components/Advisor/Group/Group";
import AdvisorSpace from "./components/Advisor/Space/MySpace";
import MyStudents from "./components/Advisor/Students/Students";
import Work from "./components/Advisor/Work/Work";
////////////////////////////////////
import Lead from "./pages/Lead/Lead";
import Advisors from "./components/Staff/Advisors/Advisors";
import Batch from "./components/Staff/Batch/Batch";
import DomainComponent from "./components/Staff/Domain/Domain";
import Group from "./components/Staff/Groups/Groups";
import GroupManage from "./components/Staff/GroupManage/Groups";
import Payments from "./components/Staff/Payment/Payment";
import Placements from "./components/Staff/Placement/Placement";
import Students from "./components/Staff/Students/Students";
////////////////////////////////////
import Communication from "./pages/Communication/Communication";
////////////////////////////////////
import Finance from "./pages/Finance/Finance";
////////////////////////////////////
import Placement from "./pages/Placement/Placement";
////////////////////////////////////

import ProfilePic from "./components/Common/Crop/Crop";

//Context Providers
import { AuthProvider } from "./Context/AuthContext";
import { StyleProvider } from "./Context/StyleContext";
import { StudentProvider } from "./Context/StudentContext";
import { AdvisorProvider } from "./Context/AdvisorContext";
import { LeadProvider } from "./Context/LeadContext";

import UserLogin from "./pages/User/UserLogin/UserLogin";
import UserReg from "./pages/User/UserLogin/UserReg";

import "./App.css";


import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/admin"
              element={
                <h1> U R the Main .'</h1>
              }
            />
          </Routes>
          <StyleProvider>
            <StudentProvider>
              <Routes>
                {/* <Route path="/signup" element={<UserReg />} />
                <Route path="/signin" element={<UserLogin />} /> */}
                {/* <Route path="/test" element={<AddTask2 content={{props:[{element:"input", label:"success", placeholder:"success"},
                {element:"select", label:"name", placeholder:"name", options:[{value:"1", label:"1"},{value:"2", label:"2"}]},
                {element:"select", label:"name", placeholder:"name", options:[{value:"5", label:"ser"},{value:"3", label:"sha"}]},
              ]}}/>} />  */}

                <Route path="/signin" element={<Home />} />
                <Route
                  path="/"
                  element={
                    <Student child={<StudentSpace />} />
                  }
                />
                <Route
                  path="/taskslist"
                  element={
                    <Student child={<><Tasks /><Pending /></>} />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Student child={<Profile />} />
                  }
                />
                <Route
                  path="/payment"
                  element={
                    <Student child={<MyPayment />} />
                  }
                />
              </Routes>
              <AdvisorProvider>
                <Routes>
                <Route
                  path="/manifest"
                  element={
                    <Student child={<><Manifest /><Pending /></>} />
                  }
                />
                </Routes>
              </AdvisorProvider>
            </StudentProvider>

            {/* ADVISOR */}
            <AdvisorProvider>
              <Routes>
                <Route
                  path="/advisor"
                  element={
                    <Advisor child={<AdvisorSpace />}/>
                  }
                />
                <Route
                  path="/advisor/profile"
                  element={
                    <Advisor child={<Profile />}/>
                  }
                />
                <Route
                  path="/advisor/students"
                  element={
                    <Advisor child={<MyStudents />}/>
                  }
                />
                <Route
                  path="/advisor/work"
                  element={
                    <Advisor child={<Work />}/>
                  }
                />
                <Route
                  path="/advisor/group"
                  element={
                    <Advisor child={<MyGroup />}/>
                  }
                />
                <Route
                  path="/advisor/group/taskslist"
                  element={
                    <Advisor child={<Tasks />}/>
                  }
                />
              </Routes>
              <Routes>
                <Route
                  path="/advisor/group/manifest"
                  element={
                    <Advisor child={<Manifest />}/>
                  }
                />
              </Routes>
            </AdvisorProvider>

            {/* LEAD */}
            <LeadProvider>
              <Routes>
                <Route
                  path="/lead"
                  element={
                    <Lead child={<AdvisorSpace />}/>
                  }
                />
                <Route
                  path="/lead/payments"
                  element={
                    <Lead child={<Payments />}/>
                  }
                />
                <Route
                  path="/lead/batch"
                  element={
                    <Lead child={<Batch />}/>
                  }
                />
                <Route
                  path="/lead/domain"
                  element={
                    <Lead child={<DomainComponent />}/>
                  }
                />
                <Route
                  path="/lead/students"
                  element={
                    <Lead child={<Students />}/>
                  }
                />
                <Route
                  path="/lead/student/profile"
                  element={
                    <Lead child={<Profile by="student" />}/>
                  }
                />
                <Route
                  path="/lead/groups"
                  element={
                    <Lead child={<Group />}/>
                  }
                />
                <Route
                  path="/lead/groups/manage"
                  element={
                    <Lead child={<GroupManage />}/>
                  }
                />
                <Route
                  path="/lead/advisors"
                  element={
                    <Lead child={<Advisors />}/>
                  }
                />
                <Route
                  path="/lead/advisor/profile"
                  element={
                    <Lead child={<Profile by="advisor" />}/>
                  }
                />
                <Route
                  path="/lead/placements"
                  element={
                    <Lead child={<Placements />}/>
                  }
                />
                <Route
                  path="/finance"
                  element={
                    <Finance child={<AdvisorSpace />}/>
                  }
                />
                <Route
                  path="/finance/payments"
                  element={
                    <Finance child={<Payments />}/>
                  }
                />
                <Route
                  path="/placement"
                  element={
                    <Placement child={<AdvisorSpace />}/>
                  }
                />
                <Route
                  path="/placement/placements"
                  element={
                    <Placement child={<Placement />}/>
                  }
                />
              </Routes>
            </LeadProvider>
          </StyleProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
