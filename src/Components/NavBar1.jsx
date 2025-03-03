import React from "react";
import { Link } from "react-router-dom";
import NavbarLocation from "./NavbarLocation";
import AccountLists from "./AccountLists";
import ReturnOrders from "./ReturnOrders";
import Language from "./Language";
import NavbarInput from "./NavbarInput";
import "../styles/Cart.css";
import { useSelector } from "react-redux";

const NavBar1 = () => {

  const cartLength =useSelector((state) => state.cart.cartItems)

  return (
    <>
      <div
        className="header-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          padding: "10px 20px",
          backgroundColor: "#131921",
        }}
      >
        <img
          src="/public/Images/gratis-png-amazonas.png"
          width={100}
          height={30}
          style={{ backgroundColor: "#131921" }}
          alt=""
        />

        <NavbarLocation />
        <NavbarInput />
        <Language />
        <AccountLists />
        <ReturnOrders />
        <Link to="/cart">
          <div className="cart border-white">
            <div className="cart-quantity-display">
              {cartLength.length > 0 && <span className="cart-count">{cartLength.length}</span>}
              <img
                src="/public/Images/307-3071593_accessories-shopping-cart-icon-white.png"
                width={25}
                alt=""
              />
            </div>
            <span>
              <h1>Cart</h1>
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar1;
