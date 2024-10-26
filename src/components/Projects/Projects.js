import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chafy from "../../Assets/Projects/erik-mclean-QzpgqElvSiA-unsplash.jpg";
import chaty from "../../Assets/Projects/dp1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chaty}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal Portofolio website using reactjs."
              ghLink="https://github.com/nisar015"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chafy}
              isBlog={false}
              title="Music Website"
              description="Music Website uisng Javascript"
              ghLink="https://github.com/nisar015"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
