import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

function Registration() {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12 d-flex justify-content-center">
          <div className="form">
            <p className="p-4 text-black d-flex justify-content-center">
              <img
                className="logo d-flex justify-content-center"
                src="/logo.png"
                alt="Girl in a jacket"
                width="100"
                height="100"
              ></img>
              <h2 className="appname">HR Management APP</h2>
            </p>
            <br></br>
            <div className="form-body">
              <div className="username">
                <label className="form__label" for="firstName">
                  Name{" "}
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="email">
                <label className="form__label" for="email">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Email"
                />
              </div>
              <div className="password">
                <label className="form__label" for="password">
                  Password{" "}
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="phone">
                <label className="form__label" for="confirmPassword">
                  Confirm Password{" "}
                </label>
                <input
                  className="form__input"
                  type="phone"
                  id="phone"
                  placeholder="phone"
                />
              </div>
            </div>
            <div class="footer">
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
