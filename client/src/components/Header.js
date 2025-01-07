import React from "react";
import logo from "../static-files/jio-logo.webp";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand align-items-center" href="#">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block"
          style={{ borderRadius: "50%" }}
          width="50"
        />{" "}
        <span>JioGames</span>
      </a>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav fw-bold">
          <li className="nav-item">
            <a className="nav-link active mx-3" href="#">
              <h5>Home</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="#">
              <h5>About</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="#">
              <h5>Devices</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="#">
              <h5>Only on JioGames</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3" href="#">
              <h5>JioGamesDev</h5>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
