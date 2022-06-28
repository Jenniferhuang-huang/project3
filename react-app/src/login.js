import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LogIn(props) {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 d-flex justify-content-center">
            <Card style={{ width: "800px" }} className="mx-auto mt-5">
              <Card.Header className="pb-4">
                {!login ? <h1>Sign In</h1> : <h1>Welcome!</h1>}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {!login && (
                    <React.Fragment>
                      <h3>Please login using one of the following:</h3>
                      <LoginForm />
                      <FacebookLogin
                        appId="1726336101043555"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                      />
                    </React.Fragment>
                  )}
                  {login && <Welcome fbpic={picture} fbdata={data} />}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const LoginForm = () => {
  return (
    <form className="login border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <br></br>
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your email" />
      <br></br>
      <input
        type="submit"
        value="Login"
        className="btn bg-success text-white my-3"
      />
    </form>
  );
};

const Welcome = ({ fbpic, fbdata }) => {
  return (
    <div>
      <AppNavbar />{" "}
      <Container fluid>
        {" "}
        <div class="d-flex justify-content-center">
        <Button className="mb-5 nav bg-light">
          {" "}
          <Link to="/inventories" className="nav-link">
            Manage Work Hours{" "}
          </Link>{" "}
        </Button>{" "}</div>
      </Container>{" "}
    </div>
  );
};

export default LogIn;
