import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar
        className="nav navbar-dark px-5 d-flex justify-content-center"
        expand="md"
      >
        <NavbarBrand tag={Link} to="/">
          <p className="navtitle mt-4 text-black d-flex justify-content-center">
            <img
              className="logo d-flex justify-content-center"
              src="/logo.png"
              alt="Girl in a jacket"
              width="100"
              height="100"
            ></img>
            <h2 className="appname">HR Management</h2>
          </p>
          <br></br>
        </NavbarBrand>
      </Navbar>
    );
  }
}
