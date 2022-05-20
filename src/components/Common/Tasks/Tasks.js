// Bootstrap
import { Row, Col, Accordion, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Tasks.module.css";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import AddTask from "../AddTask/AddTask";

function Tasks() {
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
         

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>



          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>

          <Col sm={12} className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}>
            <Row className="m-0 ">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ height: "fit-content" }}>
                    <Row className="m-0 w-100">
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Week 21
                      </Col>

                      <Col className={`${style.tableBodyText}`} sm={2}>
                        Payments
                      </Col>
                      <Col className={`${style.tableBodyText}`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ps-4`} sm={2}>
                        48
                      </Col>
                      <Col className={`${style.tableBodyText} ms-4`} sm={2}>
                        14/05/2022
                      </Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table >
                      <tbody>
              <Link to="/taskslist/task">

                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        </Link>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        <tr>
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

                            <Col className="m-0 row">
                              <b>
                                <Link to="/taskslist/task">
                                  <Col
                                    sm={12}
                                    className={`py-2 mb-2 cp rounded-3 ${style.tableBody}`}
                                  >
                                    <Row className="m-0">
                                      
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Payment and he not completed many tasks etc
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        04/05/2022
                                      </Col>
                                      <Col
                                        className={`${style.tableBodyText}`}
                                        sm={3}
                                      >
                                        Ali
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
                              </b>
                            </Col>
                          </Row>
                        </tr>
                        
                        
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>




         
          


          
        </b>
      </Col>
    </Row>
  );
}

export default Tasks;
