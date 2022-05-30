// Bootstrap
import { Row, Col, Accordion, Table, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Tasks.module.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../../Context/AuthContext";

function Tasks() {

  const { studentTasks, user_is, user, getStudentTasks } = useContext(AuthContext);
  useEffect(() => {
    if (user_is === 'student') {
      getStudentTasks(user.user_id);
    }
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
          <Col className={`${style.tableHeadText} `} sm={2}>
            <span className="ms-3">Week</span>
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Updations
          </Col>
          <Col className={`${style.tableHeadText}`} sm={2}>
            Pending
          </Col>
          <Col className={`${style.tableHeadText} `} sm={2}>
            Marks
          </Col>

          <Col className={`${style.tableHeadText}`} sm={2}>
            Next
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <b>
          { studentTasks && studentTasks.map((task, index) => {
            return (
          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion defaultActiveKey="0" flush className="bg">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100 bg">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        {task.week}
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        {task.pending}
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        {task.tech_mark + task.misc_mark}
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body className="bg">
                    <Table>
                        <Link to={`/${user_is == "advisor" ? "advisor/group/manifest" : "manifest"}`}>
                            <Row>
                              <Col
                                sm={12}
                                className={`py-2 my-2  px-4 rounded-3 bginfo `}
                              >
                                <Row className="m-0 bginfo" xs={0}>
                                  <Col
                                    className={`${style.tableHeadText}`}
                                    sm={3}
                                  >
                                    Remarks
                                  </Col>
                                  <Col
                                    className={`${style.tableHeadText}`}
                                    sm={3}
                                  >
                                    Date
                                  </Col>
                                  <Col
                                    className={`${style.tableHeadText} `}
                                    sm={3}
                                  >
                                    Reviewer
                                  </Col>

                                  <Col
                                    className={`${style.tableHeadText}`}
                                    sm={3}
                                  >
                                    Next
                                  </Col>
                                </Row>
                              </Col>
                              {task.reviews.map((review, index) => {
                                return (
                              <Col className="m-0 row">
                                  <Link to={`/${user_is == "advisor" ? "advisor/group/manifest" : "manifest"}`}>
                                    <Col
                                      sm={12}
                                      className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                    >
                                      <Row className="m-0">
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={3}
                                        >
                                          {review.remark}
                                        </Col>
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={3}
                                        >
                                          {review.date}
                                        </Col>
                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={3}
                                        >
                                          {review.reviewer}
                                        </Col>

                                        <Col
                                          className={`${style.tableBodyText}`}
                                          sm={3}
                                        >
                                          14/05/2022
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Link>
                              </Col>
                                )})}
                            </Row>
                        </Link>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
        )})}
        </b>
      </Col>
    </Row>
  );
}

export default Tasks;
