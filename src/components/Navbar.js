import React from "react";
import airbnbLogo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="Airbnb Logo" className="nav-icon" />
    </nav>
  );
}
