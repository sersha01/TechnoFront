//Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from NavBox.module.css
import style from "./NavBox.module.css";
import { Link } from "react-router-dom";

function NavBox() {
  return (
    <Row className="m-0 rounded-3 py-4">
      <Link to="/advisor">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp  ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">My Space</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div
              className={`px-2 ${(style.navSelected, style.navItems)}`}
            ></div>
          </Col>
        </Col>
      </Link>
      <Link to="/advisor/profile">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp  ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">My Profile</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div
              className={`px-2 ${(style.navSelected, style.navItems)}`}
            ></div>
          </Col>
        </Col>
      </Link>
      <Link to="/advisor/students">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">My Students</p>
          </Col>
          <Col className="ps-2 " xs={1}>
            <div className={`px-2  ${(style.navSelected, style.navItems)}`}>
              {" "}
            </div>
          </Col>
        </Col>
      </Link>
      <Link to="/advisor/work">
        <Col
          className={`pe-0 row m-0 justify-content-end text-center position-relative cp ${style.navItems}`}
          xs={12}
        >
          <Col className="my-2 p-0" xs={11}>
            <p className="navitems">My Work</p>
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
