import React, { useContext, useEffect } from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Students.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AdvisorContext from "../../../Context/AdvisorContext";

const Students = () => {

  const { getMyStudents, myStudents } = useContext(AdvisorContext);

  useEffect(() => {
    getMyStudents();
  },[])

  return (
    <Row className={`m-0 px-3 rounded-2 bg py-3 ${style.tasks}`}>
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>My Students</h2>
        </div>
        <div className="d-flex">
          <TextField
            id="outlined-basic"
            label="Group"
            variant="outlined"
            className="mx-2 h-100"
          />
          <TextField
            id="outlined-basic"
            label="Batch"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className="mx-2 h-100">
            <ManageSearchIcon />
          </Button>
        </div>
      </Col>
      <Col sm={12} className={`py-2 my-2  px-4 rounded-3 ${style.tableHead}`}>
        <Row className="m-0" xs={0}>
          <Col className={`${style.tableHeadText}`} sm={1}>
            Id
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Name
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Week
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Pending
          </Col>

          <Col className={`${style.tableHeadText}`} sm={2}>
            Advisor
          </Col>
          <Col className={`${style.tableHeadText}`} sm={3}>
            Actions
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <>
          {myStudents && myStudents.map((student, index) => {
            return(
            <Col
            sm={12}
            className={`py-2 mb-2 cp bglight rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} sm={1}>
                #{index + 1}
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                {student.name}
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                {student.week}
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                {student.pending}
              </Col>

              <Col className={`${style.tableBodyText}`} sm={2}>
                {student.advisor ? student.advisor : "No Group"}
              </Col>
              <Col className={`${style.tableBodyText} d-flex`} sm={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className="mx-1 my-auto"
                >
                  Shift
                </Button>
                <Button variant="contained" color="error">
                  Terminate
                </Button>
              </Col>
            </Row>
          </Col>
          )})}
          {/* <Col
            sm={12}
            className={`py-2 mb-2 cp bgred rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} sm={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                Hrishi
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                17
              </Col>
              <Col className={`${style.tableBodyText}`} sm={2}>
                4
              </Col>

              <Col className={`${style.tableBodyText}`} sm={2}>
                Aneesha
              </Col>
              <Col className={`${style.tableBodyText} d-flex`} sm={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className="mx-1 my-auto"
                >
                  Shift
                </Button>
                <Button variant="contained" color="error">
                  Terminate
                </Button>
              </Col>
            </Row>
          </Col> */}
        </>
      </Col>
    </Row>
  );
};

export default Students;
