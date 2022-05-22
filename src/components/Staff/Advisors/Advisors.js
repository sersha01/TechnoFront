import React from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddTask from "../../Common/AddTask/AddTask";


import { useState } from "react";

const Advisors = () => {
  return (
    <Row className="m-0 px-3 rounded-2 bglight py-3">
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>Advisors</h2>
        </div>
        <div>
          <Button></Button>
        </div>
      </Col>

      <Col sm={12} className="py-2 my-2 bgdark  px-4 rounded-3">
        <Row className="m-0 textlight" xs={0}>
          <Col className="bgdark" sm={2}>
            ID
          </Col>
          <Col className="bgdark" sm={2}>
            Name
          </Col>
          <Col className="bgdark" sm={2}>
            Batch
          </Col>
          <Col className="bgdark" sm={3}>
            Groups
          </Col>

          <Col className="bgdark" sm={3}>
            Actions
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row ">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Aneesha
            </Col>
            <Col className="textdark" sm={2}>
              23
            </Col>
            <Col className="textdark" sm={3}>
              5
            </Col>

            <Col className="textdark d-flex" sm={3}>
              <AddTask title="Edit" value="advisor" />
              <Button className="coh mx-2">Profile</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Aneesha
            </Col>
            <Col className="textdark" sm={2}>
              23
            </Col>
            <Col className="textdark" sm={3}>
              5
            </Col>

            <Col className="textdark d-flex" sm={3}>
              <AddTask title="Edit" value="advisor" />
              <Button className="coh mx-2">Profile</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Aneesha
            </Col>
            <Col className="textdark" sm={2}>
              23
            </Col>
            <Col className="textdark" sm={3}>
              5
            </Col>

            <Col className="textdark d-flex" sm={3}>
              <AddTask title="Edit" value="advisor" />
              <Button className="coh mx-2">Profile</Button>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Aneesha
            </Col>
            <Col className="textdark" sm={2}>
              23
            </Col>
            <Col className="textdark" sm={3}>
              5
            </Col>

            <Col className="textdark d-flex" sm={3}>
              <AddTask title="Edit" value="advisor" />
              <Button className="coh mx-2">Profile</Button>
            </Col>
          </Row>
        </Col>
        
      </Col>
    </Row>
  );
};

export default Advisors;
