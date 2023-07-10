import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ navLinks }) => {
  const themeClass = "grey-background";
  const themeClassDark = "grey-dark-background";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className={`sidebar ${themeClass} ${menuOpen ? "open" : ""}`}>
        <div className={`arrow ${themeClassDark}`} onClick={handleClick}>
          <i
            className={`fa ${menuOpen ? "fa-angle-left" : "fa-angle-right"} `}
            aria-hidden="true"
          ></i>
        </div>
        <div className="navigation">
          <ul>
            {Object.entries(navLinks).map(([key, { url, name, icon }]) => (
              <li
                key={key}
                className={window.location.pathname === url && "active"}
              >
                <Link to={url}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icons/${icon}`}
                  />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
