import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">LET ME  INTRODUCE MYSELF</span> 
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple"> I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              
              <i>
                <b className="purple">My field of Interest's are building new &nbsp; Web Technologies and Products </b>
          
              </i>
              <br />
              <br />
              <b className="purple">Whenever possible, I also apply my passion for developing products
              with Node.js and</b> 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks like
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <i><h1 className="purple">FIND ME ON</h1></i>
            
            <p className="purple">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nisar015"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nisar-ahmmed-873301256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nisar_29/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
