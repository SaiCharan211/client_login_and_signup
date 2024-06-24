import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ErrorMessage,setErrorMessage]=useState('')

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://server-login-and-signup-1.onrender.com/auth/login", {
      email,
      password,
    })
      .then((response) => {
        console.log(response)
        if (response.data.status) {
          console.log("user Logined");
          navigate("/home", { replace: true });
        }
        if (!response.data.status) {
          setErrorMessage(response.data.message)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                type="email"
                autoComplete="off"
                className="form-control  "
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="m-3 ">
              <label htmlFor="password">
                <strong>Password</strong>
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

            {/*Error Message */}
            <p style={{color:'red'}}>{ErrorMessage}</p>
            <button type="submit" className="btn btn-success w-100 ">
              Login
            </button>
          </form>

          <p> New User</p>
          <Link to="/forgotPassword">Forget Password</Link>
          <Link to="/" className="btn btn-default border w-100 ">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
