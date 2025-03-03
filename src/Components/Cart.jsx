import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "../styles/Cart.css";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";
import InformationBar from "../Components/InformationBar"
import SubFooter from "../Components/SubFooter"


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  console.log(removeFromCart);
  return (
    <>
      <div style={{ backgroundColor: "#eaeded" }}>
        <NavBar1 />
        <NavBar2 />
        <div className="cart-container">
          <div className="product-display">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
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
                  </div>
                  <hr />
                  <h3>Subtotal( {item.quantity} items ):</h3>
                  <span className="span5">${totalAmount}</span>
                </div>
              </div>
            ))}
          </div>

          {cartItems.map((item, index) => (
            <div className="subtotal-display" key={index}>
              <h3 className="">Subtotal( {item.quantity} items ):</h3>
              <span className="span5">${totalAmount}</span>
              <button className="proceed">Proceed to checkout</button>
            </div>
          ))}

          <div className="second-box"></div>
        </div>
        
        <InformationBar/>
        <SubFooter/>
      </div>
    </>
  );
};

export default Cart;
