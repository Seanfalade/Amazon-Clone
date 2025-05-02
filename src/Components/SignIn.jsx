import React, { useState } from "react";
import "../styles/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  let url = "http://localhost:5005/user/sign-in";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");

  const handleLogin = () => {
    console.log("Sending request to:", url); // Debug the request URL
    console.log("Request data:", { email, password });

    axios.post(url, { email, password })
    .then((response) => {
      console.log("Server responded:", response.data);
      if (response.data.status) {
        console.log(" Login success!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("firstname", response.data.firstname);
        navigate("/");
       
      } else {
        console.log("Server rejected login:", response.data.message);
        setmessage(response.data.message);
      }
    })
    .catch(err => {
      if (err.response) {
        console.error("Server responded with:", err.response.status, err.response.data);
      } else {
        console.error("Request error:", err.message);
      }
    })
  };
  return (
    <>
      <div className="signin-page">
        <div>
          <Link to={"/"}>
            <img
              className="amazon-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signin-info-box">
          <h2>Sign in</h2>
          <small className="text-danger">{message}</small>
          <p className="p1">Email or mobile phone number</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="p1">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={handleLogin}>Continue</button>
          </div>
          <p>
            By continuing, you agree to Amazon's
            <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
          </p>

          <span className="a2">
            <a href="">Need help?</a>
          </span>

          <hr />

          <p className="p2">Buying for work?</p>

          <span className="span2">
            <a href="">Shop on Amazon Business</a>
          </span>
        </div>

        <div className="create-account">
          <span className="lined-text">New to Amazon?</span>
          <button onClick={() => navigate("/sign-up")}>
            Create your Amazon account
          </button>
        </div>
        <hr />

        <div className="footer">
          <div className="terms-conditions">
            <p>
              <a href="">Conditions of Use</a>
            </p>
            <p>
              <a href="">Privacy Notice</a>
            </p>
            <p>
              <a href="">Help</a>
            </p>
          </div>
          <p>1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
