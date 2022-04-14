import React from "react";
import ImgBanner from "../assets/images/android-chrome-192x192.png";
import { Link } from "react-router-dom";

import { Navbar, Container } from "react-bootstrap";

import "./navbar.css";

function navbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <img
              alt=""
              src={ImgBanner}
              width="30"
              height="30"
              className="d-inline-block align-bottom mx-2"
            />
            Hangad 24/7
          </Link>
        </Container>
        <Container style={{ justifyContent: "flex-end" }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
