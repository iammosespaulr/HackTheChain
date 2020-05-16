import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
      setEmail(e.target.value);
  }

  function handleChange2(e) {
      setPassword(e.target.value);
  }
  function handleSubmit() {
      console.log("Email " + email);
      console.log("Pasword " + password);
      // TODO: AUTHENTICATE USER HERE
  }
  
  return (
    <Container>
            <Col xs="8">
                <img src={LeafWithCoins} className="left-image-home-page" />
            </Col>
            <Col xs="4">
                {/* <a
                className="App-link"
                href="https://github.com/iammosespaulr/HackTheChain"
                target="_blank"
                rel="noopener noreferrer"
                >
                The Source
                </a> */}
                <Row>
                    <img src={Logo} className="turtle-logo-home-page"/>
                    <div className="home-page-title-div">
                      <p className="home-page-title">Turtle</p><p className="treasury-text home-page-title">Treasury</p>
                    </div>
                </Row>
                <Row className="login-form">
                 <b className="login-label">SIGNUP PAGE</b>
                 <br />
                 </Row>
                <div  className="form">
                <form noValidate autoComplete="off">
                    <TextField required id="standard-basic" label="EMAIL ADDRESS" onChange={handleChange}/>
                    <br />
                    <TextField required type="password" id="standard-basic" label="PASSWORD" className="password-login-page" onChange={handleChange2}/>
                </form>
                <p className="forgot-password"><a href="#" className="forgot-password" >Forgot Password?</a></p>
                <Button variant="contained" className="login-submit-button" onClick={handleSubmit}>Sign In</Button>
                <p className="new-account">Don't have an account? <a href="#" className="treasury-text">Create a new account.</a></p>
                </div>
            </Col>
    </Container>
  );
}

export default SignUpPage;
