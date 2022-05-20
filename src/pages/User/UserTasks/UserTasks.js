import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/Common/Header/Header";
import Header2 from "../../../components/Common/Header2/Header2";
import NavBox from "../../../components/Common/Nav Box/NavBox";
import Notification from "../../../components/Common/Notification/Notification";
import Manifest from "../../../components/Common/Manifest/Manifest";

const UserTasks = () => {
  return <Container fluid className="mx-0 p-0">
  <Header />
  <Header2/>
  <Row className="mx-5 mt-4 ">
    <Col md={3}>
      <Row className="bg rounded-3 bs">
        <NavBox />
      </Row>
      <Row className="mt-4 bg rounded-3 mb-5 bs">
        <Notification/>
      </Row>
    </Col>
    <Col md={8} className="bg rounded-3 p-0 mx-5 pb-5 mb-3 bs rightdiv">
      <Manifest/>
    </Col>
  </Row>
</Container>;
};

export default UserTasks;
