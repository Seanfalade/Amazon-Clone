import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarInput.css"

const NavbarInput = () => {
  return (
    <>
      <div
        className="header-search-space"
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          width: "800px",
          height: "41px",
          backgroundColor: "white",
          borderRadius: "10px",
          marginLeft: "20px",
        }}
      >
        <div
          className="dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
                display: 'flex',
                height: '41px',
                alignItems: 'center',
                padding: '15px 10px 15px 10px',
                textDecoration: 'none',
                backgroundColor: '#e6e6e6',
                borderRadius: '4px 0px 0px 4px'
                
            }}
            >
          <p>All</p>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
          </ul>
        </div>
        <input
          className="header-input"
          type="text"
          placeholder="Search Amazon"
          style={{
            border: "none",
            width: "100%",
            paddingLeft: "20px",
          }}
        />
        <img
        className="search-icon"
          src="/public/Images/search.png"
          alt=""
          width={41}
          style={{
            borderRadius: "0px 4px 0px 0px",
            backgroundColor: "#f3a847",
            padding: "10px",
          }}
        />
      </div>
    </>
  );
};

export default NavbarInput;
