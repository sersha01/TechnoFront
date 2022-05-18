// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./pages/User/UserHome/UserHome";
import UserProfile from "./pages/User/UserProfile/UserProfile";
import UserTasks from "./pages/User/UserTasks/UserTasks";
import UserTasksList from "./pages/User/UserTasksList/UserTasksList";
import UserPayments from "./pages/User/UserPayments/UserPayments";
import UserLogin from "./pages/User/UserLogin/UserLogin";
import UserReg from "./pages/User/UserLogin/UserReg";
import { AuthProvider } from "./AuthContext/AuthContext";
import { PrivateRoute } from "./Utils/PrivateRoute";
import "./App.css";

import AdvisorHome from "./pages/Advisor/AdvisorHome/AdvisorHome";
import AdvisorProfile from "./pages/Advisor/AdvisorProfile/AdvisorProfile";
import AdvisorStudents from "./pages/Advisor/AdvisorStudents/AdvisorStudents";
import AdvisorWork from "./pages/Advisor/AdvisorWork/AdvisorWork";
import AdvisorTasksList from "./pages/Advisor/AdvisorTasksList/AdvisorTasksList";
import AdvisorTask from "./pages/Advisor/AdvisorTask/AdvisorTask";

import LeadHome from "./pages/Lead/Home";
import LeadAdvisors from "./pages/Lead/Advisors";
import LeadBatch from "./pages/Lead/Batch";
import LeadDomain from "./pages/Lead/Domain";
import LeadGroups from "./pages/Lead/Groups";
import LeadPayments from "./pages/Lead/Payments";
import LeadStudents from "./pages/Lead/Students";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<UserReg />} />
            <Route path="/signin" element={<UserLogin />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  {" "}
                  <UserHome />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="/taskslist"
              element={
                <PrivateRoute>
                  {" "}
                  <UserTasksList />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="/taskslist/task"
              element={
                <PrivateRoute>
                  {" "}
                  <UserTasks />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  {" "}
                  <UserProfile />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  {" "}
                  <UserPayments />{" "}
                </PrivateRoute>
              }
            />

            <Route path="/advisors" element={<AdvisorHome />}></Route>
            <Route
              path="/advisors/profile"
              element={<AdvisorProfile />}
            ></Route>
            <Route
              path="/advisors/students"
              element={<AdvisorStudents />}
            ></Route>
            <Route path="/advisors/work" element={<AdvisorWork />}></Route>
            <Route
              path="/advisors/work/taskslist"
              element={<AdvisorTasksList />}
            ></Route>
            <Route
              path="/advisors/work/tasks"
              element={<AdvisorTask />}
            ></Route>

            <Route path="/lead" element={<LeadHome />}></Route>
            <Route path="/lead/payments" element={<LeadPayments />}></Route>
            <Route path="/lead/batch" element={<LeadBatch />}></Route>
            <Route path="/lead/domain" element={<LeadDomain />}></Route>
            <Route
              path="/lead/students"
              element={<LeadStudents />}
            ></Route>
            <Route path="/lead/groups" element={<LeadGroups />}></Route>
            <Route path="/lead/advisors" element={<LeadAdvisors />}></Route>
            <Route path="/lead/placements" element={<LeadAdvisors />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
