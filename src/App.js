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
import { PrivateRouteStudent, PrivateRouteAdvisor, PrivateRouteLead } from "./Utils/PrivateRoute";
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

            {/* STUDENT */}
            <Route path="/signup" element={<UserReg />} />
            <Route path="/signin" element={<UserLogin />} />
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
              </PrivateRouteAdvisor>}
            />
            <Route
              path="/advisor/profile"
              element={
                <PrivateRouteAdvisor>
                  <AdvisorProfile />
                </PrivateRouteAdvisor>}
            />
            <Route
              path="/advisor/students"
              element={
                <PrivateRouteAdvisor>
                  <AdvisorStudents />
                </PrivateRouteAdvisor>}
            />
            <Route 
            path="/advisor/work" 
            element={
              <PrivateRouteAdvisor>
                <AdvisorWork />
              </PrivateRouteAdvisor>}
            />
            <Route
              path="/advisor/work/taskslist"
              element={
                <PrivateRouteAdvisor>
                  <AdvisorTasksList />
                </PrivateRouteAdvisor>}
            />
            <Route
              path="/advisor/work/tasks"
              element={
              <PrivateRouteAdvisor>
                <AdvisorTask />
              </PrivateRouteAdvisor>}
            />

            {/* LEAD */}
            <Route 
            path="/lead" 
            element={
              <PrivateRouteLead>
                <LeadHome />
              </PrivateRouteLead>}
            />
            <Route 
            path="/lead/payments" 
            element={
            <PrivateRouteLead>
              <LeadPayments />
            </PrivateRouteLead>}
            />
            <Route 
            path="/lead/batch" 
            element={
              <PrivateRouteLead>
              <LeadBatch />
            </PrivateRouteLead>}
            />
            <Route 
            path="/lead/domain" 
            element={
              <PrivateRouteLead>
              <LeadDomain />
            </PrivateRouteLead>}
            />
            <Route
              path="/lead/students"
              element={
                <PrivateRouteLead>
                  <LeadStudents />
                </PrivateRouteLead>}
            />
            <Route 
            path="/lead/groups" 
            element={
              <PrivateRouteLead>
                <LeadGroups />
              </PrivateRouteLead>}
            />
            <Route 
            path="/lead/advisor" 
            element={
              <PrivateRouteLead>
                <LeadAdvisors />
              </PrivateRouteLead>}
            />
            <Route 
            path="/lead/placements" 
            element={
              <PrivateRouteLead>
                <LeadAdvisors />
              </PrivateRouteLead>}
            />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
