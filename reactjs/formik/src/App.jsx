import React from "react";
import { useFormik } from "formik";
// import "./App.css";
import * as Yup from "yup";

const App = () => {
  //schema defination..

  const ValidationSchema = Yup.object({
    name: Yup.string()
      .min(4, "name must be greater than 4 character")
      .required("name is required"),
    email: Yup.string()
      .email("invalid email address")
      .required("email is must"),
    password: Yup.string()
      .min(6, "password must be greater than 6 digit")
      .required("password is must"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
