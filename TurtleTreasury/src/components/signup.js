import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { user } from "../dataActions";

  
function SignUpPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [repassword, setRepassword] = useState("");
  const [accountId, setAccountId] = useState("");
  const [privateKey, setPrivateKey] = useState(""); 

  function handleChange(e) {
      setEmail(e.target.value);
  }

  function handleChangePassword(e) {
      setPassword(e.target.value);
  }

  function handleChangeRepassword(e) {
    setRepassword(e.target.value);
  }

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  function handleChangePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleChangeAccountId(e) {
    setAccountId(e.target.value);
  }

  function handleChangePrivateKey(e) {
    setPrivateKey(e.target.value);
  }
  function handleSubmit() {
    if(password == repassword) {
      console.log("Passwords match!")
    }
      console.log("Email " + email);
      console.log("Pasword " + password);
      console.log("Account Id " + accountId);
      console.log("Private Key " + privateKey);
      console.log("Phone Number " + phoneNumber);
      console.log("First Name " + firstName);
      console.log("Last Name " + lastName);

      dispatch(user({"email": email, "password": password, "first-name": firstName, "last-name": lastName, "account-ID": accountId, "private-key": privateKey, "phone-number": phoneNumber}));
      // TODO: AUTHENTICATE USER HERE

  }
  
  return (
    <Row className="hide-overflow">
            <Col md="5">
              <Row>
                <div className="home-page-title-div">
                    <img src={Logo} className="turtle-logo-signup-page"/>
                      <p className="home-page-title">Turtle</p><p className="treasury-text home-page-title">Treasury</p>
                    </div>
                </Row>
                <Row className="signup-form padding-left-column">
                 <b>Sign Up!</b>
                </Row>
                <Row className="padding-left-column">
                 <p className="new-account">Tell us more about you so you can get started.</p>
                 </Row>
                 <Row className="padding-left-column">
                 <p className="hedera-label" data-tip="Ensures better security and transparency through Hedera Consensus Service"><b>1.</b>Create Hedera Account</p>
                 <ReactTooltip />
                  <a href="https://portal.hedera.com/register" target="_blank"><Button variant="contained" size="large" fontSize="100px" className="hedera-button">Go To Hedera</Button></a>
                </Row>
                <Row className="padding-left-column">
                     <TextField required id="standard-basic" className="first-column-signup" label="ACCOUNT ID" onChange={handleChangeAccountId}/>
                     <TextField required id="standard-basic" className="second-column-signup" label="PRIVATE KEY" onChange={handleChangePrivateKey}/>
                </Row>
                <Row className="padding-left-column">
                  <p className="hedera-label part-two"><b>2.</b>Fill in information</p>
                 </Row>
                 <Row className="padding-left-column">
                 <TextField required id="standard-basic" className="first-column-signup" label="FIRST NAME" onChange={handleChangeFirstName}/>
                    <TextField required id="standard-basic" className="second-column-signup" label="LAST NAME" onChange={handleChangeLastName}/>
                 </Row>
                 <Row className="padding-left-column">
                 <TextField required id="standard-basic" className="first-column-signup" label="PHONE NUMBER" onChange={handleChangePhoneNumber}/>
                    <TextField required id="standard-basic" className="second-column-signup" label="EMAIL ADDRESS" onChange={handleChange}/>
                 </Row>
                 <Row className="padding-left-column">
                 <TextField required type="password" className="first-column-signup" id="standard-basic" label="PASSWORD" onChange={handleChangePassword}/>
                    <TextField required type="password" className="second-column-signup" id="standard-basic" label="RE-PASSWORD" onChange={handleChangeRepassword}/>     
                 </Row>
                 <Row>
                   <Col md="12">
                   <Button variant="contained" className="login-submit-button" onClick={handleSubmit}>Sign Up</Button>
                   </Col>

                 </Row>
            </Col>
            <Col md="7">
                <img src={LeafWithCoins} className="right-image-home-page" />
            </Col>
    </Row>
  );
}

export default SignUpPage;
