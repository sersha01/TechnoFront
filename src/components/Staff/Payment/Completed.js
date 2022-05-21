// Bootstrap
import React from 'react';
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Payment.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Completed = () => {
  return (
    <>
      <Col sm={12} className="py-2 my-2  px-4 rounded-3 bgdark">
        <Row className="m-0" xs={0}>
          <Col className="bgdark textlight" sm={1}>
            ID
          </Col>
          <Col className="bgdark textlight" sm={3}>
            Name
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Batch
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Type
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Amount
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Status
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <b>
          <Link to="/advisor/work/tasks">
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={1}>#1 </Col>
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={2}>Completed</Col>
              </Row>
            </Col>
          </Link>
          <Link to="/advisor/work/tasks">
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={1}>#1 </Col>
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={2}>Completed</Col>
              </Row>
            </Col>
          </Link>
          <Link to="/advisor/work/tasks">
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={1}>#1 </Col>
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={2}>Completed</Col>
              </Row>
            </Col>
          </Link>
          <Link to="/advisor/work/tasks">
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={1}>#1 </Col>
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={2}>Completed</Col>
              </Row>
            </Col>
          </Link>
          <Link to="/advisor/work/tasks">
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={1}>#1 </Col>
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={2}>Completed</Col>
              </Row>
            </Col>
          </Link>
        </b>
      </Col>
    </>
  );
};

export default Completed;
