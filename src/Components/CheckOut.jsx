import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/CheckOut.css";
import { Link, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js"; // Load Stripe
import axios from "axios"; // Import Axios for API requests

const stripePromise = loadStripe(
  "pk_test_51R8mKGFjJ8HLnZ6jF9k5hSbEPHKyuXTLwjFKzbXuqazH2yw6ZGNRNsJgx0QOVsdtK8nSr9euksZdsdA08cOpwTNj00R2xfLywt"
);
const CheckOut = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found, redirecting to sign-in.");
      navigate("/sign-in");
      return;
    }

    // Check token validity with backend
    axios
      .get("http://localhost:5005/user/checkout", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (!response.data.status) {
          console.log("Token invalid or expired, redirecting.");
          navigate("/sign-in");
        }
      })
      .catch((err) => {
        console.log("Error verifying token:", err);
        navigate("/sign-in");
      });
  }, [navigate]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const { data } = await axios.post(
      "http://localhost:5005/create-checkout-session",
      {
        items: [{ name: "Amazon Order", price: totalAmount, quantity: 1 }],
      }
    );

    const result = await stripe.redirectToCheckout({ sessionId: data.id });

    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <>
      <div className="header">
        <div className="amazon-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
        </div>
        <div>
          <h1 className={totalQuantity > 0 ? "blue-text" : "red-text"}>
            Checkout ({totalQuantity} items)
          </h1>
        </div>
        <div className="secure-icon">
          <img src="/public/Images/secured-ssl._CB485936932_.png" alt="" />
        </div>
      </div>
      <div className="first-h3s">
        <h3 className="h3-1">1 Shipping address</h3>
        <h3 className="h3-2">1 Enter a new shipping address</h3>
      </div>

      <div className="info-boxes">
        <div className="info-box">
          <h1>Add a new address</h1>
          <div className="autofill-box">
            <p>Save time. Autofill your current location</p>
            <button>Autofill</button>
          </div>

          <div className="region ">
            <p>Country/Region</p>
            <button>United States</button>
          </div>

          <div className="info-input">
            <div>
              <label className="label">
                Full name (First name and Last name)
              </label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label className="label">Phone number</label>
              <input type="text" name="" id="" />
              <p className="span1">May be use to assist delivery</p>
            </div>
            <div>
              <label className="label">Address line 1</label>
              <input
                type="text"
                name=""
                placeholder="Street address or P.O Box"
                id=""
              />
            </div>
            <div>
              <label className="label">Address line 2</label>
              <input
                type="text"
                name=""
                placeholder="Apt, suite, unit, building, floor, etc."
                id=""
              />
            </div>
          </div>

          <div className="city-code">
            <div className="city-input">
              <label className="label">City</label>
              <input type="text" name="" id="" />
            </div>
            <div className="zip-code">
              <label className="label">Zip Code</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <p className="p2">Delivery instructions (optional)</p>
          <Link className="link1">
            Add preferences, notes, access codes and more
          </Link>

          <button className="btn2" onClick={handleCheckout}>
            Proceed to payment
          </button>
        </div>
        <div className="order-summary">
          <span className="span1">Use this address</span>
          <p className="p3">
            Choose a shipping address to continue checking out. You'll still
            have a chance to review and edit your order before it's final.
          </p>
          <hr />
          <h2>Order Summary</h2>
          <span className="span2">items ({totalQuantity}):</span>
          --
          <span className="span2">Shipping & handling:</span>
          --
          <span className="span2">Total before tax:</span>
          --
          <span className="span2">Estimated tax to be collected:</span>
          --
          <hr />
          <h2 className="h2-2">
            Order Total: <br />${totalAmount.toFixed(2)}
          </h2>
          <div className="link">
            <Link>How are shipping costs calculated?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
