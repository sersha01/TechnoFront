import React, { useContext, useEffect } from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddTask from "../../Common/AddTask/AddTask";
import AuthContext from "../../../Context/AuthContext";

const Batch = () => {

  const { getBatches, batches, deleteBatch } = useContext(AuthContext);

  useEffect(() => {
    getBatches();
  },[])

  return (
    <Row className="m-0 px-3 rounded-2 bglight py-3">
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>Batch</h2>
        </div>
        <div>
          <AddTask title="Add Batch" value="batch" />
        </div>
      </Col>

      <Col sm={12} className="py-2 my-2 bgdark  px-4 rounded-3">
        <Row className="m-0 textlight" xs={0}>
          <Col className="bgdark" sm={2}>
            Batch
          </Col>
          <Col className="bgdark" sm={3}>
            Advisor
          </Col>
          <Col className="bgdark" sm={2}>
            Students
          </Col>
          <Col className="bgdark" sm={2}>
            Placed
          </Col>
          <Col className="bgdark text-center" sm={3}>
            Actions
          </Col>
        </Row>
      </Col>

      {batches && batches.map((batch) => (
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg" key={batch.id}>
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              {batch.name}
            </Col>
            <Col className="textdark" sm={3}>
              {batch.advisor}
            </Col>
            <Col className="textdark" sm={2}>
              {batch.student}
            </Col>
            <Col className="textdark" sm={2}>
              {batch.placement}
            </Col>
            <Col className="textdark d-flex" sm={3}>
              <Button className="sendform mx-2">Edit</Button>
              <Button className="coh" onClick={()=>{deleteBatch(batch.id)}}>Delete</Button>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default Batch;
