import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="signin-box">
        <h1>Sign in</h1>
        <p>Email or mobile phone number</p>
        <input type="text" />
        <button>Continue</button>
        <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.</p>
      </div>
    </>
  )
}

export default SignIn