import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/Advisor/Header/Header";
import Header2 from "../../../components/Advisor/Header2/Header2";
import NavBox from "../../../components/Advisor/NavBox/NavBox";
import Notification from "../../../components/Advisor/Notification/Notification";
import Manifest from "../../../components/Advisor/Manifest/Manifest";
import Pending from "../../../components/Pending/Pending"


const AdvisorTask = () => {
  return (
    <Container fluid className="mx-0 p-0">
      <Header />
      <Header2 />
      <Row className="mx-5 mt-4  d-none d-lg-flex ">
        <Col md={3}>
          <Row className="bg rounded-3 bs">
            <NavBox />
          </Row>
          <Row className="mt-4 bg rounded-3 mb-5 bs">
            <Notification />
          </Row>
        </Col>
        <Col md={8} className="bglight rounded-3 p-0 mx-5 me-0 pb-5 mb-3 bs">
          <Manifest />
          <Pending/>
        </Col>
      </Row>
      <Row className="d-md-flex d-lg-none ">
        <Manifest />
        <Pending/>
      </Row>
    </Container>
  )
}

export default AdvisorTask
