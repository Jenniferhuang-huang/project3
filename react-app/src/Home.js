import React, { Component } from "react";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogIn from "./login";
import Registration from "./registration";

class Home extends Component {
  render() {
    return (
      <div className="items checkout-btn">
        <p className="header p-4 text-black d-flex justify-content-center">
          <img
            className="logo d-flex justify-content-center"
            src="/logo.png"
            alt="Girl in a jacket"
            width="100"
            height="100"
          ></img>
          <h2 className="appname">HR Management</h2>
        </p>
        <Link to="/login">
          <Button
            className="btn btn-primary my-5 mx-auto col-sm-4 d-flex justify-content-center"
            id="cartBtn"
          >
            Login
          </Button>
          <div></div>
          <Link to="/registration">
            <Button
              className="btn btn-primary my-5 mx-auto col-sm-4 d-flex justify-content-center"
              id="cartBtn"
            >
              Sign up
            </Button>
          </Link>
        </Link>
      </div>
    );
  }
}

export default Home;
