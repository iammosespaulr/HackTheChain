import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function LoginPage() {
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
    <Row className="hide-overflow">
            <Col md="8">
                <img src={LeafWithCoins} className="left-image-home-page" />
            </Col>
            <Col md="4" className="right-column">
                    <Row className="home-page-title-div">
                    <img src={Logo} className="turtle-logo-home-page"/>
                      <p className="home-page-title">                    
                        Turtle</p><p className="treasury-text home-page-title">Treasury</p>
                    </Row>
                <Row className="login-form">
                 <b>Login</b>
                 </Row>
                <div className="form">
                    <TextField required id="standard-basic" label="EMAIL ADDRESS" onChange={handleChange}/>
                    <br />
                    <TextField required type="password" id="standard-basic" label="PASSWORD" className="password-login-page" onChange={handleChange2}/>
                </div>
                <Col md="12" className="form">                
                    <Row>
                    <p className="forgot-password"><a href="#" className="forgot-password">Forgot Password?</a></p>
                    </Row>
                    <Row>
                    <Button variant="contained" className="login-submit-button" onClick={handleSubmit}>Sign In</Button>
                    </Row>
                    <Row>
                    <p className="new-account">Don't have an account? <Link to="/signup" className="treasury-text">Create a new account.</Link></p>
                    </Row>
                </Col>

            </Col>
    </Row>
  );
}

export default LoginPage;
