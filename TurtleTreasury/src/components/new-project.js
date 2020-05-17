import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageUploader from 'react-images-upload';

function NewProject() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
    function handleChange2(e) {
        setTitle(e.target.value);
    }

    function onDrop(picture) {
        console.log(picture);
        setImage(picture);
    }

    function SubmitProj() {
        window.location = '/dashboard'
    }

  return (
    <Col md="12">
        <Row className="navbar">
            <Col xs="2" className="navigation-font-size explore">
                <p>Create New Project</p>
            </Col>
            <Col xs="1"  className="navigation-font-size">
                <Link to="/dashboard" className="treasury-text create-new-project">Explore</Link>  
            </Col>
            <Col xs="7">
                <Row className="nav-bar-title">
                   <img src={Logo} width="6%" height="10%"/>
                    <p>Turtle</p><p className="treasury-text">Treasury</p>
                </Row>
            </Col>
            <Col xs="2" className="navigation-font-size">
                <Link to="/" className="create-new-project profile">Sign Out</Link>
            </Col>
        </Row>
        <Row className="green-banner">
            <Col md="5">
                <img src={Logo} width="35%" className="turtle-logo-dashboard"/>
            </Col>
            <Col className="dashboard-banner-text" md="7">
                <h1><b>Let's Get Started</b></h1>
                <h1>& Create Your Project Now
                </h1>
            </Col>
        </Row>
        <Row>
        <ImageUploader
                className="image-uploader padding-left-project"
                withIcon={true}
                buttonText='Choose image'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
        </Row>
        <Row className="padding-left-project">
        <TextField required id="standard-basic-title" label="TITLE" className="password-login-page text-algin" onChange={handleChange2}/>
        </Row>
        <Row className="padding-left-project">
        <TextField required id="standard-multiline-basic"           multiline
          rows={4}
          label="DESCRIPTION" className="password-login-page text-algin" onChange={handleChange2}/>
        </Row>
        <Row className="padding-left-project">
        <p className="amount-field">$</p><TextField required id="standard-amount-basic" label="AMOUNT" className="amount-field text-algin" onChange={handleChange2}/>
        </Row>
        <Row className="padding-left-project-submission">
        <Button variant="contained" className="project-submit-button" onClick={SubmitProj}>Submit</Button>
        </Row>
    </Col>
  );
}

export default NewProject;
