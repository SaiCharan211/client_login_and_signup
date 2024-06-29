import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const { token } = useParams();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`https://server-login-and-signup.onrender.com/reset-password`, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        } else {
          setError(response.data.message);
        }
        console.log(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
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