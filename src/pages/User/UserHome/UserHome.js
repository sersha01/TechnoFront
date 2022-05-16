import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "../../../AuthContext/AuthContext";
import Header from "../../../components/User/Header/Header";
import Header2 from "../../../components/User/Header2/Header2";
import NavBox from "../../../components/User/Nav Box/NavBox";
import Notification from "../../../components/User/Notification/Notification";
import MySpace from "../../../components/User/Space/MySpace";

const UserHome = () => {


  return (
    <Container fluid className="mx-0 p-0">
      <Header />
      <Header2/>
      <Row className="mx-5 mt-4  d-none d-lg-flex ">
        <Col md={3}>
          <Row className="bg rounded-3 bs">
            <NavBox  />
          </Row>
          <Row className="mt-4 bg rounded-3 mb-5 bs">
            <Notification />
          </Row>
        </Col>
        <Col
          md={8} 
          className="bg rounded-3 p-0 mx-5 me-0 pb-5 mb-3 bs"
        >
          <MySpace/>
        </Col>
      </Row>
      <Row className="d-md-flex d-lg-none ">
        <MySpace/>
      </Row>
    </Container>
  );
};

export default UserHome;
