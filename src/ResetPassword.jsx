import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "./UrlFile";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}reset-password/${token}`, { password });
      if (response.data.status) {
        setMessage('Password reset successful');
        navigate('/login');
      } else {
        setMessage('Error resetting password: ' + response.data.message);
      }
    } catch (error) {
      setMessage('Error resetting password: ' + error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Reset Password</h1>
          {message && <p className="text-danger">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="password">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
