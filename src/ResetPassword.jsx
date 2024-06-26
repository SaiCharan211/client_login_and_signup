import React, { useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    setLoading(true);

    Axios.post(`https://server-login-and-signup-1.onrender.com/reset-password`, { token, password }, { withCredentials: true })
      .then((response) => {
        setLoading(false);
        if (response.data.status) {
          alert("Password reset successfully!");
          navigate("/login");
        } else {
          alert(response.data.message || "Something went wrong, please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Reset Password</h1>
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
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="m-3">
              <label htmlFor="confirmPassword">
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100" disabled={loading}>
              {loading ? 'Processing...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
