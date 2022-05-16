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
                  <Routes>
                  <Route path="" element={<UserHome />} />
                  <Route path="taskslist" element={<UserTasksList />} />
                  <Route path="taskslist/task" element={<UserTasks />} />
                  <Route path="profile" element={<UserProfile />} />
                  <Route path="payment" element={<UserPayments />} />
                  </Routes>
                </PrivateRoute>
              }
            />
            {/* <PrivateRoute>
            <Route path="/" element={<UserHome />} />
            <Route path="/taskslist" element={<UserTasksList />} />
            <Route path="/taskslist/task" element={<UserTasks />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/payment" element={<UserPayments />} />
            </PrivateRoute> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
