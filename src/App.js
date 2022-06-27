import React from "react";
import {Routes,Route} from 'react-router-dom'
import Layout from "./layout";
import Overview from "./pages/main/overview";
import Tasks from "./pages/main/tasks";
import Calendar from "./pages/main/calendar";
import Login from './pages/login'
import SignUp from "./pages/signup";
import Settings from "./pages/main/settings"
import Profile from "./pages/main/profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<Overview/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Route>

      <Route path="/login"  element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
