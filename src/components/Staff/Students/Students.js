import React from "react";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddTask from "../../Common/AddTask/AddTask";
import TextField from "@mui/material/TextField";
import style from "./Students.module.css";

const Students = () => {
  return (
    <Row className="m-0 px-3 rounded-2 bglight py-3">
      <Col sm={12} className="d-flex justify-content-between mb-2">
        <div className="d-flex">
          <h2 className="me-4">Students</h2>
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
            Week
          </Col>
          <Col className="bgdark" sm={2}>
            Group
          </Col>
          <Col className="bgdark" sm={2}>
            Advisor
          </Col>

        
        </Row>
      </Col>

      <Col className="m-0 row ">
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bggreen">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bgred">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bgyellow">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bgyellow">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
          <Link to="/lead/groups/manage">
        <Col sm={12} className="py-2 mb-2 cp rounded-3 bg">
          <Row className="m-0">
            <Col className="textdark" sm={2}>
              #1
            </Col>
            <Col className="textdark" sm={2}>
              Wafi
            </Col>
            <Col className="textdark" sm={2}>
              Python
            </Col>
            <Col className="textdark" sm={2}>
              22
            </Col>
            <Col className="textdark" sm={2}>
              20A
            </Col>

            <Col className="textdark d-flex" sm={2}>
              Aneesha
            </Col>
          </Row>
        </Col>
        </Link>
         
      </Col>
    </Row>
  )
}

export default Students
