import React, { useContext, useEffect } from "react";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddTask from "../../Common/AddTask/AddTask";
import TextField from "@mui/material/TextField";
import style from "./Placement.module.css";
import LeadContext from "../../../Context/LeadContext";

const Placement = () => {
  const { getPlacements, placements } = useContext(LeadContext);

  useEffect(() => {
    getPlacements();
  }, []);

  return (
    <Row className="m-0 px-3 rounded-2 bglight py-3">
      <Col sm={12} className="d-flex justify-content-between mb-2">
        <div className="d-flex">
          <h2 className="me-4">Placements</h2>
          <Button variant="contained" className="bgdark textlight w-100 h-50">
            Add
          </Button>
        </div>

        <div className="d-flex justify-content-end textlight">
          <Col
            xs={4}
            className={`py-1 my-1 textwhite mx-2 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Name</label>
            <input type="text" className={`w-100 ${style.input}`} />
          </Col>

          <Col
            xs={4}
            className={`py-1 textwhite my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Batch</label>
            <input type="text" className={`w-100 ${style.input}`} />
          </Col>

          <Button className=" mx-1 searchbtn">
            <ManageSearchRoundedIcon />
          </Button>
        </div>
      </Col>

      <Col sm={12} className="py-2 my-2 bgdark  px-4 rounded-3">
        <Row className="m-0 textlight" xs={0}>
          <Col className="bgdark" sm={2}>
            Batch
          </Col>
          <Col className="bgdark" sm={2}>
            Name
          </Col>
          <Col className="bgdark" sm={2}>
            Domain
          </Col>
          <Col className="bgdark" sm={2}>
            LPA
          </Col>
          <Col className="bgdark" sm={2}>
            Location
          </Col>

          <Col className="bgdark" sm={2}>
            Designation
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row ">
        {placements &&
          placements.map((placement) => {
            return (
              <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
                <Row className="m-0">
                  <Col className="textdark" sm={2}>
                    #{placement.student.batch.name}
                  </Col>
                  <Col className="textdark" sm={2}>
                    {placement.student.user.username}
                  </Col>
                  <Col className="textdark" sm={2}>
                    {placement.student.profile.domain.name}
                  </Col>
                  <Col className="textdark" sm={2}>
                    {placement.LPA}
                  </Col>
                  <Col className="textdark" sm={2}>
                    {placement.location}
                  </Col>
                  <Col className="textdark d-flex" sm={2}>
                    {placement.position}
                  </Col>
                </Row>
              </Col>
            );
          })}
      </Col>
    </Row>
  );
};

export default Placement;
