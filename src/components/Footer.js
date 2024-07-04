import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Address: 126 Seaton St, Toronto, ON, Canada
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Phone Number: +1 662 598 1591</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Postal/ZIP code: M5A 2T3</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
