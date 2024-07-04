import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Julian Kevin </span>
            from <span className="purple"> Canada.</span>
            <br />
            <br />I have 7+ years of experience as a software developer, working on a live large scale data-driven and SaaS product.
            <br />
            <br />Developed more than 6 web applications from small to large scale using server-side languages like React.js, Vue.js, Python and NodeJS.
            <br />
            <br />Managed full development life cycle from technical requirements, solution design, development, testing, documentation through production rollout
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Julian Kevin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
