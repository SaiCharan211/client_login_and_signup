import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "./UrlFile";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${baseUrl}forgot-password`, {
      email,
    }, { withCredentials: true })
     .then((response) => {
        console.log(response);
        if (response.data.status) {
          alert("Check your email for reset password Link");
          navigate("/login");
        } else {
          setError(response.data.error);
        }
      })
     .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Forgot Password</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <div className="text-danger">{error}</div>}

            <button type="submit" className="btn btn-success w-100">
              Reset Password
            </button>
            <p>Have an Account?</p> <Link to='/login'>Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;