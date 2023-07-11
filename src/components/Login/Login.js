import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="form-left">
          <div className="form-section">
            <LoginForm />
          </div>
        </div>
        <div className="form-right">
          <div className="image-section">
            <img src="assets/images/Product-image.png" alt="Product image" />
          </div>
        </div>
      </div>
      <div className="bottom_border"></div>
    </>
  );
};

export default Login;
