import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import LeafWithCoins from "../img/leaf-in-coins.jpg";
import Logo from "../img/logo192.png";
import "../fonts/AvenirLTStd-Book.otf";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Turtle from "../img/Florida_Box_Turtle_Digon3_re-edited.jpg";
import {Card, CardColumns} from 'react-bootstrap';

function ProjectsDisplay(props) {

  const post = props.projects.map((project) =>
    <Card key={project.id} className="card-size">
        <Card.Img variant="top" src={project.image} className="project-icon" />
        <Card.Body>
            <Card.Title>{project.title}</Card.Title>
        </Card.Body>
    </Card>
  );

  return (
    <CardColumns>{post}</CardColumns>
  );
}

export default ProjectsDisplay;



// import React, { useState } from 'react';
// import '../App.css';
// import { Container, Row, Col } from 'reactstrap';
// import LeafWithCoins from "../img/leaf-in-coins.jpg";
// import Logo from "../img/logo192.png";
// import "../fonts/AvenirLTStd-Book.otf";
// import { TextField, Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import Turtle from "../img/Florida_Box_Turtle_Digon3_re-edited.jpg";

// function ProjectsDisplay(props) {

//   const post = props.projects.map((project) =>
//     <div key={project.id}>
//         <h1 className="project-title">{project.title}</h1>
//         <div className="project-image-div">
//             <img src={project.image} className="project-icon"/>
//         </div>
//     </div>
//   );

//   return (
//     <div className="projects">
//         {post}
//     </div>
//   );
// }

// export default ProjectsDisplay;
