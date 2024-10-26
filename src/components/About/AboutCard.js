import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nisar Ahmmed </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I recently completed my Bachelor of Engineering from Methodist College of Engineering and Technology in Hyderabad, Telangana, achieving a CGPA of 7.2. Before that, I completed my Intermediate at Narayana Junior College in Kurnool, Andhra Pradesh, with a 90% aggregate, and my tenth grade at Yashoda Garden High School in Pattikonda, scoring a GPA of 9.7.

I come from a close-knit family with my father, mother, and younger brother. Outside of academics, I enjoy playing sports, traveling, and spending time with friends. I’m a problem-solver at heart and am currently honing my skills in React.js, Python, and C++.
            <br />
           </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
