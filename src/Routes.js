import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function AppRoutes() {
  return (
    <>
      <div style={{ alignContent: "center", overflow: "hidden" }}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/tenants" element={<Home />} />
          <Route exact path="/widgets" element={<Home />} />
          <Route exact path="/workflows" element={<Home />} />
          <Route exact path="/email" element={<Home />} />
          <Route exact path="/customer-journeys" element={<Home />} />
          <Route exact path="/reports" element={<Home />} />
          <Route exact path="/settings" element={<Home />} />
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
