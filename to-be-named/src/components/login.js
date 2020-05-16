import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";

function LoginPage() {
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
                 <b className="login-label">Login</b>
                 <br />
                 </Row>
                <div  className="form">
                <form noValidate autoComplete="off">
                    <TextField required id="standard-basic" label="EMAIL ADDRESS"/>
                    <br />
                    <TextField required type="password" id="standard-basic" label="PASSWORD" className="password-login-page"/>
                </form>
                <p className="forgot-password"><a href="#" className="forgot-password">Forgot Password?</a></p>
                <Button variant="contained" className="login-submit-button">Sign In</Button>
                <p className="new-account">Don't have an account? <a href="#" className="treasury-text">Create a new account.</a></p>
                </div>

                
            </Col>

    </Container>
  );
}

export default LoginPage;
