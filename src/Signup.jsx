import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  //Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' && email !== '' && password !== '') {
      Axios.post("https://server-login-and-signup-1.onrender.com/signup", {
        username,
        email,
        password,
      })
        .then(response => {
          console.log(response);
          if (response.data.message) {
            console.log(response.data.message);
            navigate("/login", { replace: true });
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setError('Please enter all details');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Signup</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

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

            <div className="m-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p style={{color:'red'}}>{error}</p>
            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>

          <p>Already Have an Account</p>
          <Link to="/login" className="btn btn-default border w-100">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
