import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import liiingo from "../../Assets/Projects/liiingo.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import zilionixx from "../../Assets/Projects/zilionixx.png";
import unicial from "../../Assets/Projects/unicial.png";
import dongle_cex from "../../Assets/Projects/dongle_cex.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unicial}
              isBlog={false}
              title="Unicial"
              description="Unicial is a decentralized virtual reality platform powered by the Ethereum blockchain built with React.js, Material-UI, and Node.js.  Within the Unicial platform, users can create, experience, and monetize their content and applications."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and TailwindCSS which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zilionixx}
              isBlog={false}
              title="Zilionixx"
              description="Zilionixx is new blockchain network based on EVM network. It uses so many blockchain and web technologies."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liiingo}
              isBlog={false}
              title="Liiingo"
              description="A web-based system to build Mobile Apps by drag and drop the components, upload and arrange images and videos, write and edit, style the text etc. Developed with React, NodeJs, PHP, TypeScript and MongoDB."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dongle_cex}
              isBlog={false}
              title="Centralized Exchange"
              description="UI/UX is designed to be similar to that of the Binance exchange platform, which has the largest users, so that users can easily adapt. It used React.js, Node.js, Golang, email services and many other blockchain technologies."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
