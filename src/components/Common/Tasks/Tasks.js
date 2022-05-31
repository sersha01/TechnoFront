// Bootstrap
import { Row, Col, Accordion, Table, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Tasks.module.css";
import { useContext, useEffect } from "react";
import AuthContext from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

function Tasks() {

  const { studentTasks, user_is, user, getStudentTasks, setCurr_manifest, curr_student } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getStudentTasks(curr_student);
  },[])
  return (
    <Row className={`m-0 px-3 bglight rounded-2 bg py-3 ${style.tasks}`}>
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          <h2>Tasks</h2>
        </div>
        <div></div>
      </Col>
      <Col sm={12} className={`py-2 my-2  px-4 rounded-3 ${style.tableHead}`}>
        <Row className="m-0 " xs={0}>
          <Col className={`${style.tableHeadText} `} sm={3}>
            <span className="ms-3">Week</span>
          </Col>
          <Col className={`${style.tableHeadText}`} sm={3}>
            Pending
          </Col>
          <Col className={`${style.tableHeadText} `} sm={3}>
            Marks
          </Col>
          <Col className={`${style.tableHeadText}`} sm={3}>
            Next
          </Col>
        </Row>
      </Col>
      <Col className="m-0 row">
          { studentTasks && studentTasks.map((task) => {
            return (
          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion defaultActiveKey="0" flush className="bg">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100 bg">
                      <Col className={`${style.tableBodyText}`} sm={3}>
                        {task.week}
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={3}>
                        {task.pending}
                      </Col>
                      <Col className={`${style.tableBodyText} ps-md-4`} sm={3}>
                        {task.tech_mark + task.misc_mark}
                      </Col>
                      <Col className={`${style.tableBodyText} ps-md-4`} sm={3}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body className="bg">
                    <Table>
                            <Row>
                              <Col
                                sm={12}
                                className={`py-0 my-2 px-4 rounded-3 bginfo `}
                              >
                                <Row className="m-0 bginfo" xs={0}>
                                  <Col
                                    className={`${style.tableHeadText}`}
                                    sm={4}
                                  >
                                    Remarks
                                  </Col>
                                  <Col
                                    className={`${style.tableHeadText}`}
                                    sm={4}
                                  >
                                    Date
                                  </Col>
                                  <Col
                                    className={`${style.tableHeadText} `}
                                    sm={4}
                                  >
                                    Reviewer
                                  </Col>
                                </Row>
                              </Col>
                              {task.reviews.length != 0 ? task.reviews.map((review) => {
                                return (
                              <Col className="m-0 row"
                              onClick={()=>{setCurr_manifest(task.id)
                                navigate(`/${user_is == "advisor" ? "advisor/group/manifest" : "manifest"}`)}}>
                                    <Col
                                      sm={12}
                                      className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                    >
                                      <Row className="m-0">
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={4}
                                        >
                                          {review.remark}
                                        </Col>
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={4}
                                        >
                                          {review.date}
                                        </Col>
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={4}
                                        >
                                          {review.reviewer}
                                        </Col>
                                      </Row>
                                    </Col>
                              </Col> 
                                )}): <Col className="text-center h5 mt-3 mb-0" onClick={()=>{setCurr_manifest(task.id)
                                  navigate(`/${user_is == "advisor" ? "advisor/group/manifest" : "manifest"}`)}}>No Reviews Yet,
                                  <b className="text-dark">Go to Manifest</b> </Col>}
                            </Row>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
        )})}
      </Col>
    </Row>
  );
}

export default Tasks;
