import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "./UrlFile";
function ResetPassword() {
  const [password, setPassword] = useState('');
  const { token } = useParams();
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}resetPassword`, { token: token, newPassword: password });
      if (response.data.status) {
        setMessage('Password reset successful');
        // Redirect or show success message
        navigate('/login')
      } else {
        setMessage('Error: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error resetting password: ' + error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Reset Password</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="password">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                autoComplete="off"
                className="form-control "
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="text-danger">{error}</div>}

            <button type="submit" className="btn btn-success w-100 ">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;