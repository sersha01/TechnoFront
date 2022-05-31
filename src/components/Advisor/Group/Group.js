import React, {useEffect, useContext} from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// import style from "./Tasks.module.css"
import style from "./Group.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AuthContext from "../../../Context/AuthContext";

const Work = () => {

  const { myGroupDetails, setCurr_student, getMyGroupDetails, curr_group } = useContext(AuthContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    getMyGroupDetails(curr_group)
  },[])

  return (
    <Row className={`m-0 px-3 rounded-2 bg py-3 ${style.tasks}`}>
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>My Students</h2>
        </div>
        <div>
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
          <Col className={`${style.tableHeadText}`} sm={3}>
           Name
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
             Week
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Pending
          </Col>
          
          <Col className={`${style.tableHeadText}`} sm={2}>
            Count
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Review vann
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <>
            {myGroupDetails && myGroupDetails.map((student, index) => {
              return (
              <Col
              sm={12}
              className={`py-2 mb-2 cp bglight rounded-3 ${style.tableBody}`}
              onClick={() => {setCurr_student(student.id)
              navigate('/advisor/group/taskslist')}} >
              <Row className="m-0">
                <Col className={`${style.tableBodyText}`} sm={1}>
                  #{index + 1}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={3}>
                  {student.name}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {student.week}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {student.pending}
                </Col>
                
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {student.count}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  <Button variant="contained" color="error" className="mx-2 h-100" 
                  onClick={() => {alert('button clickedd')}}
                  >401</Button>
                </Col>
              </Row>
            </Col>
            )})}
        </>
      </Col>
    </Row>
  )
}

export default Work
