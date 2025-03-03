import React from "react";
import "../styles/SignIn.css";
const SignIn = () => {
  return (
    <>
      <div className="signin-page">
        <div>
          <img
            className="amazon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
        </div>
        <div className="signin-info-box">
          <h2>Sign in</h2>
          <p className="p1">Email or mobile phone number</p>
          <input type="text" />
          <div>
            <button>Continue</button>
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
          <button>Create your Amazon account</button>
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
