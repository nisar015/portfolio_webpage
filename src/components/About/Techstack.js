import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  // DiMongodb,
  DiPython,
  // DiGit,
  // DiJava,
} from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">Python</h1>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">C++</h1>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">React</h1>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">Html</h1>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">CSS</h1>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 className="purple">JS</h1>
        <DiPython />
      </Col>
      
    </Row>
  );
}

export default Techstack;
