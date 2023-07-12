import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Tenants from "../Tenants/TenantTable";
import "./home.scss";

function Home() {
  const navLinks = [];
  navLinks["dashboard"] = {
    component: <Dashboard />,
    url: "/dashboard",
    name: "Dashboard",
    icon: "dashboard.svg",
  };
  navLinks["tenants"] = {
    component: <Tenants />,
    url: "/tenants",
    name: "Tenants",
    icon: "tenants.svg",
  };
  navLinks["widgets"] = {
    component: <Dashboard />,
    url: "/widgets",
    name: "Widgets",
    icon: "widgets.svg",
  };
  navLinks["workflows"] = {
    component: <Dashboard />,
    url: "/workflows",
    name: "Workflows",
    icon: "workflows.svg",
  };
  navLinks["customer-journeys"] = {
    component: <Dashboard />,
    url: "/email",
    name: "Email",
    icon: "email.svg",
  };
  navLinks["surveys"] = {
    component: <Dashboard />,
    url: "/surveys",
    name: "Surveys",
    icon: "surveys.svg",
  };
  navLinks["email"] = {
    component: <Dashboard />,
    url: "/customer-journeys",
    name: "Customer Journeys",
    icon: "customer-journeys.svg",
  };
  navLinks["reports"] = {
    component: <Dashboard />,
    url: "/reports",
    name: "Reports",
    icon: "reports.svg",
  };
  navLinks["settings"] = {
    component: <Dashboard />,
    url: "/settings",
    name: "System Settings",
    icon: "settings.svg",
  };

  const renderComponent =
    typeof navLinks[window.location.pathname.replace("/", "")] !==
      "undefined" &&
    navLinks[window.location.pathname.replace("/", "")].component;

  return (
    <>
      <Header />
      <Sidebar navLinks={navLinks} />
      <div className="home-container">{renderComponent}</div>
    </>
  );
}

export default Home;
