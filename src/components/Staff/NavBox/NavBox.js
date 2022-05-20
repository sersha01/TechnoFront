//Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from NavBox.module.css
import style from "./NavBox.module.css";
import { Link } from "react-router-dom";

function NavBox() {
  return (
    <Row className="m-0 rounded-3 py-4">
      <Link to="/lead">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp  ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Home</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div
              className={`px-2 ${(style.navSelected, style.navItems)}`}
            ></div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/payments">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp  ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Payments</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div
              className={`px-2 ${(style.navSelected, style.navItems)}`}
            ></div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/batch">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Batch</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/domain">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Domain</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/advisors">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Advisors</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/groups">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Groups</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/students">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Students</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/lead/students">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">Placements</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      
    </Row>
  );
}

export default NavBox;