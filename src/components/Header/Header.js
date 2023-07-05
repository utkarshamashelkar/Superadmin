import { Layout } from "antd";
import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const firstName = 'Utkarsha';//localStorage.getItem("firstName");
  const lastName = 'Mashelkar';//localStorage.getItem("lastName");
  const navigate = useNavigate();

  return (
    <Layout.Header className="header row">
      <div className=" col-2 fa-2.5x">
        <img src={`/assets/images/SenegalSearchLogo.jpg`} alt="logo" className="logo" />
      </div>
       {localStorage.getItem("token") ? (
        <>
         <div className="col-10 d-flex justify-content-end">
            <p className="user">
              <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i> {firstName}{" "}
              {lastName}{" "}
            </p>
          </div>

           {/* <div className="col-1">
            <i
              className="fa fa-sign-out fa-2x m-0"
              aria-hidden="true"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("firstName");
                localStorage.removeItem("lastName");
                navigate("/");
              }}
              style={{ cursor: "pointer", padding: "5px" }}
            >
              {" "}
              <div
                className="d-flex text-align-center"
                style={{ cursor: "pointer", fontSize: "12px" }}
              >
                Sign out
              </div>
            </i>{" "}
          </div>  */}
        </>
      ) : null} 
      {/* <div style={{float:"right"}}>Header with User Details</div> */}
    </Layout.Header>
  );
};

export default Header;
