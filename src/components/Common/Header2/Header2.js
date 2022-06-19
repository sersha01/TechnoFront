import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header2.css";
import {Link} from 'react-router-dom'
import Demo from './demo'

const Header2 = () => {
  return (
    <div>
      <Row className="bg">
        <Col md={12} className="d-md-flex d-lg-none bg">
          <nav role="navigation">
            <Demo></Demo>
            {/* <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to="/">
                  <li>
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/taskslist">
                  <li>
                    <p>Tasks</p>
                  </li>
                </Link>
                <Link to="/profile">
                  <li>
                    <p>Profile</p>
                  </li>
                </Link>
                <Link to="/payment">
                  <li>
                    <p>Payments</p>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <p>Leave application</p>
                  </li>
                </Link>
              </ul>
            </div> */}
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Header2;
