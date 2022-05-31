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
import { AuthProvider } from "./Context/AuthContext";
import {
  PrivateRouteStudent,
  PrivateRouteAdvisor,
  PrivateRouteLead,
} from "./Utils/PrivateRoute";
import "./App.css";

import AdvisorHome from "./pages/Advisor/AdvisorHome/AdvisorHome";
import AdvisorProfile from "./pages/Advisor/AdvisorProfile/AdvisorProfile";
import AdvisorStudents from "./pages/Advisor/AdvisorStudents/AdvisorStudents";
import AdvisorWork from "./pages/Advisor/AdvisorWork/AdvisorWork";
import AdvisorGroup from "./pages/Advisor/AdvisorGroup/AdvisorGroup";
import AdvisorTasksList from "./pages/Advisor/AdvisorTasksList/AdvisorTasksList";
import AdvisorTask from "./pages/Advisor/AdvisorTask/AdvisorTask";

import LeadHome from "./pages/Lead/Home";
import LeadAdvisors from "./pages/Lead/Advisors";
import LeadBatch from "./pages/Lead/Batch";
import LeadDomain from "./pages/Lead/Domain";
import LeadGroups from "./pages/Lead/Groups";
import GroupManage from "./pages/Lead/ManageGroup";
import LeadPayments from "./pages/Lead/Payments";
import LeadStudents from "./pages/Lead/Students";
import LeadPlacements from "./pages/Lead/Placements";
import { StyleProvider } from "./Context/StyleContext";

import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <StyleProvider>
            <Routes>
              <Route path="/signup" element={<UserReg />} />
              <Route path="/signin" element={<UserLogin />} />

              <Route path="/home" element={<Home />} />
              <Route
                path="/"
                element={
                  <PrivateRouteStudent>
                    <UserHome />
                  </PrivateRouteStudent>
                }
              />
              <Route
                path="/taskslist"
                element={
                  <PrivateRouteStudent>
                    <UserTasksList />
                  </PrivateRouteStudent>
                }
              />
              <Route
                path="/taskslist/task"
                element={
                  <PrivateRouteStudent>
                    <UserTasks />
                  </PrivateRouteStudent>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRouteStudent>
                    <UserProfile />
                  </PrivateRouteStudent>
                }
              />
              <Route
                path="/payment"
                element={
                  <PrivateRouteStudent>
                    <UserPayments />
                  </PrivateRouteStudent>
                }
              />

              {/* ADVISOR */}
              <Route
                path="/advisor"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorHome />
                  </PrivateRouteAdvisor>
                }
              />
              <Route
                path="/advisor/profile"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorProfile />
                  </PrivateRouteAdvisor>
                }
              />
              <Route
                path="/advisor/students"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorStudents />
                  </PrivateRouteAdvisor>
                }
              />
              <Route
                path="/advisor/work"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorWork />
                  </PrivateRouteAdvisor>
                }
              />
              <Route
                path="/advisor/group"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorGroup />
                  </PrivateRouteAdvisor>
                }
              />
              <Route
                path="/advisor/group/taskslist"
                element={
                  <PrivateRouteAdvisor>
                    <AdvisorTasksList />
                  </PrivateRouteAdvisor>
                }
              />
              <Route path="/advisor/group/manifest" element={<AdvisorTask />} />

              {/* LEAD */}
              <Route
                path="/lead"
                element={
                  <PrivateRouteLead>
                    <LeadHome />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/payments"
                element={
                  <PrivateRouteLead>
                    <LeadPayments />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/batch"
                element={
                  <PrivateRouteLead>
                    <LeadBatch />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/domain"
                element={
                  <PrivateRouteLead>
                    <LeadDomain />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/students"
                element={
                  <PrivateRouteLead>
                    <LeadStudents />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/groups"
                element={
                  <PrivateRouteLead>
                    <LeadGroups />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/groups/manage"
                element={
                  <PrivateRouteLead>
                    <GroupManage />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/advisors"
                element={
                  <PrivateRouteLead>
                    <LeadAdvisors />
                  </PrivateRouteLead>
                }
              />
              <Route
                path="/lead/placements"
                element={
                  <PrivateRouteLead>
                    <LeadPlacements />
                  </PrivateRouteLead>
                }
              />
            </Routes>
          </StyleProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
