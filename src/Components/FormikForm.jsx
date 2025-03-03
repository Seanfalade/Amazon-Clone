import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/SignUp.css";

const FormikForm = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstname: yup.string().required("This field is required"),
      lastname: yup.string().required("This field is required"),
      email: yup
        .string()
        .required("This field is required")
        .email("This must be an email"),
      number: yup.number(),
      password: yup.string().required("This field is required"),
    }),
  });
  return (
    <>
      <div className="signup-page">
        <div>
          <img
            className="amazon-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
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
                placeholder="At least 6 characters"
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.password && formik.errors.password}
            </small>
            <p className="p1">Passwords must be at least 6 characters.</p>

            <label htmlFor="Re-enter password">Re-enter password</label>
            <div>
              <input
                type="text"
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control my-2 is-invalid"
                    : "form-control my-2"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <small className="text-danger">
              {formik.touched.password && formik.errors.password}
            </small>
            <button>Continue</button>

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
                Already have an account?{" "}
                <span>
                  <a href="">Sign in</a>
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
