import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header2.css";
import Demo from './demo'

const Header2 = () => {
  return (
    <div>
      <Row className="bg">
        <Col md={12} className="d-md-flex d-lg-none bg">
          <nav role="navigation">
            <Demo></Demo>
           
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Header2;
