// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Tasks.module.css";
import {Link} from 'react-router-dom'

function Tasks() {
  return (
    <Row className={`m-0 px-3 rounded-2 py-3 ${style.tasks}`}>
      <Col xs={12} className="text-start">
        <h2>Tasks</h2>
      </Col>
      <Col xs={12} className={`py-2 my-2  px-4 rounded-3 ${style.tableHead}`}>
        <Row className="m-0">
          <Col className={`${style.tableHeadText}`} xs={1}>
            Id
          </Col>
          <Col className={`${style.tableHeadText}`} xs={2}>
            Week
          </Col>
          <Col className={`${style.tableHeadText}`} xs={2}>
            Updations
          </Col>
          <Col className={`${style.tableHeadText}`} xs={2}>
            Pending
          </Col>
          <Col className={`${style.tableHeadText}`} xs={1}>
            Marks
          </Col>
          <Col className={`${style.tableHeadText}`} xs={2}>
            Reviewer
          </Col>
          <Col className={`${style.tableHeadText}`} xs={2}>
            Next
          </Col>
        </Row>
      </Col>

      <Col className="m-0 row">
        <b>
            <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bgred rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bggreen rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bggreen rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bgblue rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bgyellow rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bggreen rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
          <Link to='/taskslist/task'>
          <Col
            xs={12}
            className={`py-2 mb-2 cp bggreen rounded-3 ${style.tableBody}`}
          >
            <Row className="m-0">
              <Col className={`${style.tableBodyText}`} xs={1}>
                #1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Week 1
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Payment
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                4
              </Col>
              <Col className={`${style.tableBodyText}`} xs={1}>
                48
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                Ali
              </Col>
              <Col className={`${style.tableBodyText}`} xs={2}>
                14/05/2022
              </Col>
            </Row>
          </Col>
          </Link>
        </b>
      </Col>
    </Row>
  );
}

export default Tasks;
