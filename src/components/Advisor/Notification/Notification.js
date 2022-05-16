//Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Notification.module.css"
import style from "./Notification.module.css";
import { FaBell } from 'react-icons/fa'


function Notification() {
  return (
    <Row className="m-0 rounded-3 py-4  ">
      <Col className={style.notification}>
        <h5 className="ms-3 mb-3">Notifications <FaBell/></h5>
      </Col>

      <Col
        className={`text-center ${style.hoverdiv}  cp pt-4`}
        xs={12}
      >
        <Row className="m-0">
          <Col xs={2}>
            <svg height={30} width={30}>
              <circle cx="15" cy="15" r="15" />
            </svg>
          </Col>
          <Col className="text-start" xs={10}>
            <h6 className="m-0">Notification</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Col>

      {/* //////////////////////LOOP START/////////////////////////////// */}

      <Col
        className={`text-center ${style.hoverdiv}  cp pt-4`}
        xs={12}
      >
        <Row className="m-0">
          <Col xs={2}>
            <svg height={30} width={30}>
              <circle cx="15" cy="15" r="15" />
            </svg>
          </Col>
          <Col className="text-start" xs={10}>
            <h6 className="m-0">Notification</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Col>
      <Col
        className={`text-center ${style.hoverdiv}  cp pt-4`}
        xs={12}
      >
        <Row className="m-0">
          <Col xs={2}>
            <svg height={30} width={30}>
              <circle cx="15" cy="15" r="15" />
            </svg>
          </Col>
          <Col className="text-start" xs={10}>
            <h6 className="m-0">Notification </h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Col>
      <Col
        className={`text-center ${style.hoverdiv}  cp pt-4`}
        xs={12}
      >
        <Row className="m-0">
          <Col xs={2}>
            <svg height={30} width={30}>
              <circle cx="15" cy="15" r="15" />
            </svg>
          </Col>
          <Col className="text-start" xs={10}>
            <h6 className="m-0">Notification</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Col>
      {/* //////////////////////LOOP END/////////////////////////////// */}
      <Col
        className={`text-center ${style.hoverdiv}  cp pt-4`}
        xs={12}
      >
        <Row className="m-0">
          <Col className="text-center pb-3" xs={10}>
            <h6 className="m-0">See all</h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Notification;