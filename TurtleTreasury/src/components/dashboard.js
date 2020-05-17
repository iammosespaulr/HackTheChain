import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Turtle from "../img/facts-turtles.jpg";
import ProjectsDisplay from './projects-display'; 

function Dashboard() {
    const projects = [
        {id: 1, title: 'Project 1', image: Turtle},
        {id: 2, title: 'Project 2', image: Turtle},
        {id: 3, title: 'Project 3', image: Turtle},
        {id: 4, title: 'Project 4', image: Turtle},
        {id: 5, title: 'Project 5', image: Turtle}
      ];
  return (
    <Col className="hide-overflow" md="12">
        <Row className="navbar">
            <Col xs="2" className="navigation-font-size">
                <p className="treasury-text create-new-project">Create New Project</p>
            </Col>
            <Col xs="1"  className="navigation-font-size">
                <p>Explore</p>
            </Col>
            <Col xs="7">
                <Row className="nav-bar-title">
                    <img src={Logo} width="6%" height="10%"/>
                    <p>Turtle</p><p className="treasury-text">Treasury</p>
                </Row>
            </Col>
            <Col xs="2" className="navigation-font-size">
                <p>Profile</p>
            </Col>
        </Row>
        <Row className="green-banner">
            <Col md="5">
                <img src={Logo} width="35%" className="turtle-logo-dashboard"/>
            </Col>
            <Col className="dashboard-banner-text" md="7">
                <h1><b>Support a Good Cause,</b></h1>
                <h1>With Transparency</h1>
                <p className="dashboard-description">Description!</p>
            </Col>
        </Row>
        <Row className="choose-project-alignment">
            <h1 className="choose-project">Choose a Project to Support:</h1>
        </Row>
        <Row>
            <ProjectsDisplay projects={projects} />
        </Row>
    </Col>
  );
}

export default Dashboard;
