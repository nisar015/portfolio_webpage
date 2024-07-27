import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nisar Ahmmed </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I have completed Bachelor of Engineering in CSE at Methodist College of Engineering and Technology, Hyderabad.

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImArrowRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
