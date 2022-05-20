import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/Advisor/Header/Header";
import Header2 from "../../../components/Advisor/Header2/Header2";
import NavBox from "../../../components/Advisor/NavBox/NavBox";
import Notification from "../../../components/Advisor/Notification/Notification";
import Tasks from "../../../components/Advisor/Tasks/Tasks";
import Pending from "../../../components/Pending/Pending"


const AdvisorTasksList = () => {
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
          <Tasks />
          <Pending/>
        </Col>
      </Row>
      <Row className="d-md-flex d-lg-none ">
          <Pending/>
        <Tasks />
      </Row>
      
    </Container>
  )
}

export default AdvisorTasksList
