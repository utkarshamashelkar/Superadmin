import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import "./App.css";
function AppRoutes() {
  return (
    <>
      <div style={{ alignContent: "center", overflow: "hidden" }}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/forgot-password" element={<Login />} /> */}
          
          {/* <Route exact path="/ProjectPage/:id" element={<SurveyPage />} />
          <Route exact path="/SurveyView" element={<SurveyView/>} />
          <Route exact path="/Home" element={<Home />} />   
          <Route exact path="/TextView" element={<TextView/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
