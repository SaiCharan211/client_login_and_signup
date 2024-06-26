import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import Dashboard from "./Dashboard";
import baseUrl from "./UrlFile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
