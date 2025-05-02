import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "../styles/Cart.css";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";
import InformationBar from "../Components/InformationBar";
import SubFooter from "../Components/SubFooter";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [borderColor, setborderColor] = useState("none")
  
  // const handleClick = () => {
  //   setborderColor("blue")

  //   setTimeout(() => {
  //     setborderColor("none");
  //   }, 500);
  
  // }
  
  return (
    <>
      <div style={{ backgroundColor: "#eaeded" }}>
        <NavBar1 />
        <NavBar2 />
        <div className="cart-container">
          <div className="product-display">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Your Amazon cart is empty</p> : null}
            <span className="span1">Price</span>
            <hr />

            {cartItems.map((item, index) => (
              <div className="cart-items" key={index}>
                <div className="cart-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="item-details">
                  <div className="name-price-split">
                    <h2>{item.name}</h2>

                    <span className="span2">${item.price}</span>
                  </div>
                  <div className="more-details">
                    <span className="span3">In Stock</span>
                    <p>
                      Color: <span className="more-details-span4">White</span>
                    </p>
                    <p>
                      Size: <span className="more-details-span4">3.5mm</span>
                    </p>
                    <p>
                      Style: <span className="more-details-span4">PC</span>
                    </p>
                    <div className="more-details-btn">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                    <hr />
                  </div>
                </div>
              </div>
            ))}

            <h3 className="subtotal">Subtotal( {totalQuantity} items ):</h3>
            <span className="span5">${totalAmount.toFixed(2)}</span>
          </div>

          {cartItems.map((item, index) => (
            <div className="subtotal-display" key={index}>
              <h3>Subtotal( {totalQuantity} items ):</h3>
              <span className="span">${totalAmount.toFixed(2)}</span>
              <button className="proceed" onClick={() => navigate("/checkout")}>Proceed to checkout</button>
            </div>
          ))}
          <div className="second-box"></div>
        </div>

        <InformationBar />
        <SubFooter />
      </div>
    </>
  );
};

export default Cart;
