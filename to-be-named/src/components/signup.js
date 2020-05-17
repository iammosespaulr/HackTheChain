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
                <img src={LeafWithCoins} className="right-image-home-page" />
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
                <div className="home-page-title-div">
                    <img src={Logo} className="turtle-logo-signup-page"/>
                      <p className="home-page-title">Turtle</p><p className="treasury-text home-page-title">Treasury</p>
                    </div>
                </Row>
                <Row className="signup-form">
                 <b className="login-label">Sign Up!</b>
                 <br />
                 <p className="new-account login-label">Tell us more about you so you can get started.</p>
                 </Row>
                 <br />
                 <Row>
                 <p className="hedera-label"><b>1.</b>Create Hedera Account
                  <a href=""><Button variant="contained" size="large" fontSize="100px" className="hedera-button">Go To Hedera</Button></a></p>
                  <div className="form login-label">
                     <TextField required id="standard-basic" className="first-column-signup" label="ACCOUNT ID" onChange={handleChange}/>
                     <TextField required id="standard-basic" className="second-column-signup" label="PRIVATE KEY" onChange={handleChange}/>
                  </div>
                  <br />
                  <p className="hedera-label part-two"><b>2.</b>Fill in information</p>
                 </Row>
                 <div className="form login-label">
                    <TextField required id="standard-basic" className="first-column-signup" label="FIRST NAME" onChange={handleChange}/>
                    <TextField required id="standard-basic" className="second-column-signup" label="LAST NAME" onChange={handleChange}/>
                    <br />
                    <TextField required id="standard-basic" className="first-column-signup" label="PHONE NUMBER" onChange={handleChange}/>
                    <TextField required id="standard-basic" className="second-column-signup" label="EMAIL ADDRESS" onChange={handleChange}/>
                    <br />
                    <TextField required type="password" className="first-column-signup" id="standard-basic" label="PASSWORD" onChange={handleChange}/>
                    <TextField required type="password" className="second-column-signup" id="standard-basic" label="RE-ENTER PASSWORD" onChange={handleChange}/>
                    <br />
                    <Button variant="contained" className="login-submit-button" onClick={handleSubmit}>Sign Up</Button>
                 </div>
            </Col>
    </Container>
  );
}

export default SignUpPage;
