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
import Nurse from "../img/artur-tumasjan-qLzWvcQq-V8-unsplash.jpg";
import Babysit from "../img/austin-pacheco-FtL07GM9Q7Y-unsplash.jpg";
import Book from "../img/ben-white-4K2lIP0zc_k-unsplash.jpg";
import covid from "../img/ewscripps.brightspotcdn.png";
import chef from "../img/kevin-mccutcheon-APDMfLHZiRA-unsplash.jpg";
function Dashboard() {
    const projects = [
        {id: 1, title: 'Chef Master', image: chef, amount: '$5000', description: 'Chef Master is a startup idea to connects people with personal chefs for an evening of luxury.'},
        {id: 2, title: 'Novel Idea', image: Book, amount: '$2400', description: 'Novel Idea is great for parents to find reading resources for their children'},
        {id: 3, title: 'Babysitter Plus', image: Babysit, amount: '$5500', description: 'Babysitter Plus connects you with local babysitters.'},
        {id: 4, title: 'Nurse Alert', image: Nurse, amount: '$10000', description: 'Nurse Alert aims at increasing hospital nurse response rates.'},
        {id: 5, title: 'COVID Protection', image: covid, amount: '$4920', description: 'COVID Projection raises money for those in need during the current pandemic.'}
      ];
  return (
    <Col className="hide-overflow" md="12">
        <Row className="navbar">
            <Col xs="2" className="navigation-font-size">
                <Link to="/create" className="treasury-text create-new-project">Create New Project</Link>
            </Col>
            <Col xs="1"  className="navigation-font-size explore">
                <p>Explore</p>
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
                <h1><b>Support a Good Cause,</b></h1>
                <h1>With Transparency</h1>
                <p className="dashboard-description">Crowdfunding backed by blockchain and accountability.</p>
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
