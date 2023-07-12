import React from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <img
        src={`/assets/images/SenegalSearchLogo.jpg`}
        alt="logo"
        className="logo"
      />
      <span className="wrapper">
        <p className="user">
          <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
        </p>
        <a href="" className="logout">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logout.png`} />
        </a>
      </span>
    </div>
  );
};

export default Header;
