import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss'

function Login() {
  const navigate = useNavigate();
  
  function login() {

    localStorage.setItem("token",'avvkkk')
   navigate("/home");
  }
  return (
    <>
      
     <div  className='loginpanel'>Login Details for Senegal Search Super Admin
     <button onClick={login}>Sign In</button>
     </div>
     
    </>
  );
}

export default Login;
