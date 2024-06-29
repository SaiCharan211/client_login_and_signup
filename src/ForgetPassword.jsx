import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "./UrlFile";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error,setError]=useState("")
  
  const navigate = useNavigate();

  const handleSubmit=()=>{
    e.preventDefault();
  }
  const handleSendOtp = async (e) => {
    try {
      const response = await axios.post(`${baseUrl}forgot-password`, { email });
      setMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      setMessage('Error sending OTP: ' + error.response.data.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('https://server-login-and-signup.onrender.com/verify-otp', { email, otp });
      setMessage(response.data.message);
      navigate('/resetPassword',{replace:true})
    } catch (error) {
      setMessage('Error verifying OTP: ' + error.response.data.message);
    }
  }; 

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Forgot Password</h1>
          <div>
      <h1>{isOtpSent ? 'Verify OTP' : 'Send OTP'}</h1>
      {!isOtpSent ? (
        <div>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;