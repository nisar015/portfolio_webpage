import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "60px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>  
        </Row>
        <h1 className="project-heading">
          <b><strong className="purple">Skillset </strong></b>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools I use</strong>
        </h1>
        <h1 className="purple">VS code
        </h1>
        <h1 className="purple">Github
        </h1>
        
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
