import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormikForm = () => {
  const navigate = useNavigate()
  let url = "http://localhost:5005/user/sign-up";
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values, { resetForm, setErrors }) => {
      console.log("Submitting Form Data:", values);
    
      axios
        .post(url, values)
        .then((response) => {
          console.log("Submission successful:", response.data);
          alert("Account created successfully!");
          resetForm();
          navigate("/sign-in"); // Redirect to sign-in page
        })
        .catch((err) => {
          console.log("Submission error:", err.response);
    
          if (err.response && err.response.status === 400) {
            setErrors({ email: "Email already registered" });
          } else {
            alert("Error signing up. Please try again.");
          }
        });
    },
    validationSchema: yup.object({
      firstname: yup.string().required("This field is required"),
      email: yup
        .string()
        .required("This field is required")
        .email("This must be an email"),
      number: yup.number(),
      password: yup
        .string()
        .required("This field is required")
        .min(6, "Password must be at least 6 characters"),
        confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
  });

  return (
    <>
      <div className="signup-page">
        <div>
          <Link to={"/"}>
            <img
              className="amazon-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>
        </div>

        <div className="signup-box">
          <form action="" onSubmit={formik.handleSubmit}>
            <h1>Create account</h1>
            <label htmlFor="Your name">Your name</label>
            <div>
              <input
                type="text"
                placeholder="First and last name"
                name="firstname"
                className={
                  formik.touched.firstname && formik.errors.firstname
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.firstname && formik.errors.firstname}
            </small>
            <label htmlFor="Mobile number or email">
              Mobile number or email
            </label>
            <div>
              <input
                type="text"
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.email && formik.errors.email}
            </small>

            <label htmlFor="Password">Password</label>
            <div>
              <input
                type="text"
                name="password"
                placeholder="At least 6 characters"
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.password && formik.errors.password}
            </small>
            <p className="p1">Passwords must be at least 6 characters.</p>

            <label htmlFor="confirmPassword">Re-enter password</label>
            <div>
              <input
                type="text"
                name="confirmpassword"
                className={
                  formik.touched.confirmpassword && formik.errors.confirmpassword
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.password && formik.errors.password}
            </small>
            
            <button type="submit">
              Continue
            </button>

            <div className="p2">
              <p>
                By creating an account, you agree to Amazon's{" "}
                <a href="">Conditions of Use</a> and{" "}
                <a href="">Privacy Notice.</a>
              </p>
            </div>

            <hr />
            <div className="business-acc">
              <p>Buying for work?</p>
              <span>
                <a href="">Create a free business account</a>
              </span>
            </div>

            <hr />
            <div className="already-have">
              <p>
                Already have an account?
                <span>
                  <a href="/sign-in">Sign in</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormikForm;
