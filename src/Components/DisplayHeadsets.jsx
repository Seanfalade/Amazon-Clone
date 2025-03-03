import React, { useState } from "react";
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";
import "../styles/DisplayHeadsets.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const DisplayHeadsets = () => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const productDetails = {
    id: 1,
    name: "Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, Mac, PS4, PS5, Switch - 3.5mm Audio Jack - White",
    image: "/public/images/71MGiPTwXAL._AC_SX679_.jpg",
    price: 34.99,
  };

  return (
    <>
      <NavBar1 />
      <NavBar2 />
      <div className="headset_page">
        <div className="main_image">
          <img src="/public/images/71MGiPTwXAL._AC_SX679_.jpg" alt="" />
        </div>

        <div className="product_desc">
          <h2>
            Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm
            Drivers - Memory Foam Cushion - for PC, Mac, PS4, PS5, Switch -
            3.5mm Audio Jack - White
          </h2>
          <span className="span1">
            <a href="#">Visit the Razer Store</a>
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
                IMMERSIVE, 7.1 SURROUND SOUND — Heighten awareness with accurate
                positional audio that lets you pinpoint intuitively where every
                sound is coming from (only available on Windows 10 64-bit).
              </li>
              <li>
                TRIFORCE 50MM DRIVERS — Cutting-edge proprietary design that
                divides the driver into 3 parts for individual tuning of highs,
                mids, and lows — producing brighter, clearer audio with richer
                highs and more powerful lows.
              </li>
              <li>
                ADVANCED PASSIVE NOISE CANCELLATION — Sturdy closed earcups
                fully cover ears to prevent noise from leaking into the headset.
              </li>
              <li>
                LIGHTWEIGHT DESIGN WITH BREATHABLE FOAM EAR CUSHIONS — At just
                240g, the headset features thicker headband padding and
                leatherette with memory foam ear cushions to provide maximum
                comfort.
              </li>
              <li>
                BENDABLE HYPERCLEAR CARDIOID MIC — An improved pickup pattern
                ensures more voice and less noise as it tapers off towards the
                mic’s back and sides.
              </li>
              <li>
                CROSS-PLATFORM COMPATIBILITY — Works with PC, Mac, PS4, Xbox
                One, and Nintendo Switch via a 3.5mm jack.
              </li>
              <li>
                #1 SELLING PC GAMING PERIPHERALS BRAND IN THE U.S. — Source:
                Circana, Retail Tracking Service, U.S., Dollar Sales, Gaming
                Designed Mice, Keyboards, and PC Headsets, Jan. 2019 - Dec. 2023
                combined.
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
            <span className="dollar_sign">$</span>34
            <span className="cent">99</span>
          </span>

          <div className="shipping_fee">
            <p>
              $49.42 Shipping & Import Fees Deposit to Nigeria
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

export default DisplayHeadsets;
