import React, {useEffect, useContext} from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import style from "./Tasks.module.css"
import style from "./Work.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AuthContext from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

const Work = () => {

  const { getMyGroups, myGroups, setCurr_group } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getMyGroups();
  },[])

  return (
    <Row className={`m-0 px-3 rounded-2 bg py-3 ${style.tasks}`}>
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>My Groups</h2>
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
          <Col className={`${style.tableHeadText}`} sm={2}>
           Name
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
             Batch
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Students
          </Col>
          
          <Col className={`${style.tableHeadText}`} sm={2}>
            Domain
          </Col>
          <Col className={`${style.tableHeadText}`} sm={3}>
            Review
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <>
            {myGroups && myGroups.map((group, index) => {
              return (
              <Col
              sm={12}
              className={`py-2 mb-2 cp bglight rounded-3 ${style.tableBody}`}
              onClick={() => {setCurr_group(group.id)
              navigate('/advisor/group')}} >
              <Row className="m-0">
                <Col className={`${style.tableBodyText}`} sm={1}>
                  #{index + 1}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {group.name}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {group.batch}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {group.student}
                </Col>
                
                <Col className={`${style.tableBodyText}`} sm={2}>
                  {group.domain}
                </Col>
                <Col className={`${style.tableBodyText}`} sm={3}>
                  {Date().split(' ')[0]}
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
