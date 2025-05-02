import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./pages/Home";
import FormikForm from "./Components/FormikForm";
import DisplayHeadsets from "./Components/DisplayHeadsets";
import Cart from "./Components/Cart";
import "./App.css";
import DisplayKeyboard from "./Components/DisplayKeyboard";
import CheckOut from "./Components/CheckOut";
const App = () => {
  return (
    <>
      <div style={{backgroundColor: "#e3e6e6"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headsets" element={<DisplayHeadsets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/keyboard" element={<DisplayKeyboard />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="" />
          <Route path="/sign-up" element={<FormikForm />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
