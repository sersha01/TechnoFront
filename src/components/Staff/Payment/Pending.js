import React from 'react'
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Payment.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const Pending = () => {
  return (
    <>
      <Col sm={12} className="py-2 my-2  px-4 rounded-3 bgdark">
        <Row className="m-0" xs={0}>
          
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
          <Col className="bgdark textlight" sm={3}>
            Action
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
      
          
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}> Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}> Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}> Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}> Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}>Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
              <Row className="m-0">
                <Col sm={3}> Wafi </Col>
                <Col sm={2}>20</Col>
                <Col sm={2}>Rent</Col>
                <Col sm={2}>4400</Col>

                <Col sm={3}>
                  <Button variant="contained" color="primary" className="mx-1 sendform">Send Form</Button>
                  <Button variant="contained" color="secondary" className="coh">Paid</Button>
                </Col>
              </Row>
            </Col>
          
         
    
      </Col>
    </>
  )
}

export default Pending
