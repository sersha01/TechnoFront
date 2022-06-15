import React, { useContext, useEffect } from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Payment.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AuthContext from "../../../Context/AuthContext";
import StyleContext from "../../../Context/StyleContext";

const Pending = () => {
  const { allPendingPayments, allpending, cashpaid, sendForm } =
    useContext(AuthContext);
  const {infoToast} = useContext(StyleContext);


  useEffect(() => {
    allPendingPayments();
  }, []);

  return (
    <>
      <Col sm={12} className="py-2 my-2  px-4 rounded-3 bgdark">
        <Row className="m-0" xs={0}>
          <Col className="bgdark textlight" sm={1}>
            Batch
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Name
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Type
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Status
          </Col>
          <Col className="bgdark textlight" sm={2}>
            Pending
          </Col>
          <Col className="bgdark textlight" sm={3}>
            Action
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        {allpending &&
          allpending.map((pending, index) => {
            if (pending.status === "Expired") {
              return (
                <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
                  <Row className="m-0">
                    <Col sm={1}>{pending.batch}</Col>
                    <Col sm={2}> {pending.student} </Col>
                    <Col sm={2}>{pending.types}</Col>
                    <Col sm={2}>{pending.status}</Col>
                    <Col sm={2} className="text-danger">
                      {pending.amount}
                    </Col>

                    <Col sm={3} className="d-flex justify-content-end">
                      <Button
                        variant="contained"
                        color="primary"
                        className="mx-1 sendform"
                        onClick={() => {
                          sendForm(pending.id);
                          infoToast("Form Sent to the Student");
                        }}
                      >
                        Send Form
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="coh"
                        onClick={() => {
                          cashpaid(pending.id);
                          infoToast("Payment Received in hand");
                        }}
                      >
                        Paid
                      </Button>
                    </Col>
                  </Row>
                </Col>
              );
            } else {
              return (
                <Col sm={12} className="py-2 mb-2 cp bg rounded-3">
                  <Row className="m-0">
                    <Col sm={1}>{pending.batch}</Col>
                    <Col sm={2}> {pending.student} </Col>
                    <Col sm={2}>{pending.types}</Col>
                    <Col sm={2}>{pending.status}</Col>
                    <Col sm={2} className="text-danger">
                      {pending.amount}
                    </Col>

                    <Col sm={3} className="d-flex justify-content-end">
                     
                      <Button
                        variant="contained"
                        color="secondary"
                        className="coh"
                        onClick={() => {
                          cashpaid(pending.id);
                        }}
                      >
                        Paid
                      </Button>
                    </Col>
                  </Row>
                </Col>
              );
            }
          })}
      </Col>
    </>
  );
};

export default Pending;
