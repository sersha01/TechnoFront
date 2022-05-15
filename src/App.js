// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./pages/User/UserHome/UserHome";
import UserProfile from "./pages/User/UserProfile/UserProfile";
import UserTasks from "./pages/User/UserTasks/UserTasks";
import UserTasksList from "./pages/User/UserTasksList/UserTasksList";
import UserPayments from "./pages/User/UserPayments/UserPayments";
// import UserReg from "./pages/User/UserLogin/UserReg";
import "./App.css";
import AdvisorHome from "./pages/Advisor/AdvisorHome/AdvisorHome";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/taskslist" element={<UserTasksList />} />
          <Route path="/taskslist/task" element={<UserTasks />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/payment" element={<UserPayments />} />

          <Route path='/advisors' element={<AdvisorHome/>}></Route>
          <Route path='/advisors/profile' element={<AdvisorHome/>}></Route>
          <Route path='/advisors/students'></Route>
          <Route path='/advisors/work'></Route>
          <Route path='/advisors/work/taskslist'></Route>
          <Route path='/advisors/work/tasks'></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
