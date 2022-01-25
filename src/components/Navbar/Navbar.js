import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="mobile--header">
        <div className="mobile--btn">
          <i className="fas fa-bars" onClick={handleClick}></i>
        </div>
        <div className="mobile--logo">
          🎬Ulti<span className="text--red">Flex</span>
        </div>
      </div>
      <div className={open ? "navigation active" : "navigation"}>
        <i className="fa fa-close" onClick={handleClick}></i>
        <div className="logo">
          <Link className="web--logo" to="/">
            🎬Ulti<span className="text--red">Flex</span>
          </Link>
        </div>
        <ul>
          <li>
            <Link className="link" to="/">
              Main
            </Link>
          </li>
          <li>
            <Link className="link" to="/schedulse">
              Schedules
            </Link>
          </li>
          <li>
            <Link className="link" to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
