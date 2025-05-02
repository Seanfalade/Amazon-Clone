import React, { useState } from "react";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";
import "../styles/DisplayKeyboard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const DisplayKeyboard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const productDetails = {
    id: 2,
    name: "SteelSeries Apex Pro Mini Wireless HyperMagnetic Gaming Keyboard – Compact 60% Form Factor - Adjustable Actuation - RGB – PBT Keycaps- Bluetooth – 2.4GHz - USB-C",
    image: "/public/Images/71NFUiC1XaL._AC_SX522_.jpg",
    price: 179.99,
  };

  return (
    <>
      <NavBar1 />
      <NavBar2 />
      <div className="headset_page">
        <div className="main_image">
          <img src="/public/Images/71NFUiC1XaL._AC_SX522_.jpg" alt="" />
        </div>

        <div className="product_desc">
          <h2>
            SteelSeries Apex Pro Mini Wireless HyperMagnetic Gaming Keyboard –
            Compact 60% Form Factor - Adjustable Actuation - RGB – PBT Keycaps-
            Bluetooth – 2.4GHz - USB-C
          </h2>
          <span className="span1">
            <a href="#">Visit the SteelSeries Store</a>
          </span>
          <br />
          <span className="Span2"> Choice</span>
          <span className="span3">Overall Pick</span>
          <br />
          <span className="span4"> in past month</span>
          <hr />

          <div className="product_specs">
            <h3>About this item</h3>
            <ul>
              <li>
                FULLY CUSTOMIZABLE & STUPIDLY FAST with OmniPoint 2.0 Adjustable
                HyperMagnetic switches
              </li>
              <li>
                RAPID TRIGGER — Eradicate latency arising from the physical
                movement of the switch through dynamic activation and
                deactivation of keys based on travel distance rather than a
                fixed point in the key travel.
              </li>
              <li>
                ULTIMATE CONTROL — 40 levels of per-key actuation (0.1 – 4.0mm)
                – set WASD for light, ultra-fast movements and set ability keys
                to deep presses to avoid accidentally triggering specials
              </li>
              <li>
                2-IN-1 ACTION KEYS — Program two different actions to the same
                key, such as walking with a light touch or sprinting with a deep
                press
              </li>
              <li>
                20x faster actuation, 11x faster response than traditional
                mechanical keyboards
              </li>
              <li>
                Lag-free Quantum 2.0 Dual Wireless with a 2.4GHz connection and
                Bluetooth 5.0
              </li>
              <li>
                60% form factor. Full-size functionality. Premium aluminum top
                plate. Detachable USB-C.
              </li>
            </ul>
          </div>

          {/* Report Issue */}
          <div className="report_issue">
            <img src="/public/images/message-icon.png" alt="Report Icon" />
            <a href="#">Report an issue with this product or seller</a>
            <p>
              Note: Products with electrical plugs are designed for use in the
              US. Outlets and voltage differ internationally and this product
              may require an adapter or converter.
            </p>
          </div>
        </div>

        {/* Delivery & Pricing */}
        <div className="product_delivery_details">
          <h3>Buy new:</h3>
          <span className="price1">
            <span className="dollar_sign">$</span>179
            <span className="cent">99</span>
          </span>

          <div className="shipping_fee">
            <p>
              $60.55 Shipping & Import Fees Deposit to Nigeria
              <span className="a1">
                <a href="#">Details</a>
              </span>
            </p>
          </div>

          <div className="taxes">
            <img src="public/images/information-icon.jpg" alt="Info Icon" />
            <span>Sales taxes may apply at checkout</span>
          </div>

          <div className="location">
            <img src="/public/images/location-icon.png" alt="Location Icon" />
            <a href="#">Deliver to Nigeria</a>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-container">
            <h2>In Stock</h2>
            <div className="dropdown">
              <button className="drop-btn" onClick={() => setIsOpen(!isOpen)}>
                Quantity: {quantity}
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <select
                    className="quantity-dropdown"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                      setIsOpen(false);
                    }}
                  >
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Buttons */}
            <button
              className="add-to-cart-btn"
              onClick={() => dispatch(addToCart(productDetails))}
            >
              Add to cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayKeyboard;
