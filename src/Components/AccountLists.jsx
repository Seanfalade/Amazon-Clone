import React, { useState, useEffect } from "react";
import "../styles/AccountLists.css";
import { useNavigate } from "react-router-dom";

const AccountLists = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstname, setFirstname] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFirstname = localStorage.getItem("firstname");
    if (storedFirstname) {
      setFirstname(storedFirstname);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("firstname");
    localStorage.removeItem("token"); // Also remove token if needed
    setFirstname(null);
    navigate("/"); // Go back to home page
  };

  return (
    <div
      className="account-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button to open modal */}
      <div className="sign-in border-white">
        <p>Hello, {firstname ? firstname : "Sign in"}</p>
        <h1>Accounts & Lists</h1>
      </div>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="dropdown-modal">
          {!firstname ? (
            <>
              <button
                className="sign-in-btn"
                onClick={() => navigate("/sign-in")}
              >
                Sign in
              </button>
              <p>
                <span>New customer?</span> <a href="/sign-up">Start here</a>
              </p>
              <hr />
            </>
          ) : (
            <button className="sign-in-btn" onClick={handleSignOut}>
              Sign out
            </button>
          )}

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Your Orders
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Your Wish List
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Your Recommendations
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountLists;
