import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contain">
        <div className="grid-3">
          <div className="footer-logo">
            🎬Ulti<span className="text--red">Flex</span>
          </div>
          <div className="footer-nav mobile-nav">
            <ul>
              <li>
                <Link className="link" to="/">
                  Main
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Schedules
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  News
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="socials">
            <Link to="" className="socials-icon" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="socials-icon" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="socials-icon" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
