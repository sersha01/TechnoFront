import React from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Domain = () => {
  return (
    <Row className="m-0 px-3 rounded-2 bglight py-3">
      <Col sm={6} className="d-flex justify-content-between">
        <div>
          <h2>Domain</h2>
        </div>
        <div>
         
        </div>
      </Col>
      <Col sm={6} className="d-flex justify-content-between"/>
      

      <Col sm={6} className="py-2 my-2 bgdark  px-4 rounded-3">
        <Row className="m-0 textlight" xs={0}>
          <Col className="bgdark" sm={2}>
            ID
          </Col>
          <Col className="bgdark" sm={4}>
            Name
          </Col>
          <Col className="bgdark" sm={6}>
            Actions
          </Col>
        </Row>
      </Col>

      <Row>
        <Col className="m-0  ">
          <Col sm={6} className="py-2 mb-2 cp rounded-3 bg">
            <Row className="m-0">
              <Col className="textdark" sm={2}>
                #1
              </Col>
              <Col className="textdark" sm={4}>
                Python
              </Col>

              <Col className="textdark d-flex" sm={6}>
                <Button className="sendform me-2">Edit</Button>
                <Button className="coh">Delete</Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="m-0  ">
          <Col sm={6} className="py-2 mb-2 cp rounded-3 bg">
            <Row className="m-0">
              <Col className="textdark" sm={2}>
                #1
              </Col>
              <Col className="textdark" sm={4}>
                Python
              </Col>

              <Col className="textdark d-flex" sm={6}>
                <Button className="sendform me-2">Edit</Button>
                <Button className="coh">Delete</Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="m-0  ">
          <Col sm={6} className="py-2 mb-2 cp rounded-3 bg">
            <Row className="m-0">
              <Col className="textdark" sm={2}>
                #1
              </Col>
              <Col className="textdark" sm={4}>
                Python
              </Col>

              <Col className="textdark d-flex" sm={6}>
                <Button className="sendform me-2">Edit</Button>
                <Button className="coh">Delete</Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="m-0  ">
          <Col sm={6} className="py-2 mb-2 cp rounded-3 bg">
            <Row className="m-0">
              <Col className="textdark" sm={2}>
                #1
              </Col>
              <Col className="textdark" sm={4}>
                Python
              </Col>

              <Col className="textdark d-flex" sm={6}>
                <Button className="sendform me-2">Edit</Button>
                <Button className="coh">Delete</Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Row>
  );
};

export default Domain;
