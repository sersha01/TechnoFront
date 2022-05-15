import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header2.css";
import {Link} from 'react-router-dom'

const Header2 = () => {
  return (
    <div>
      <Row className="bg">
        <Col md={12} className="d-md-flex d-lg-none bg">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to="/">
                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <Link to="/taskslist">
                  <li>
                    <a>Tasks</a>
                  </li>
                </Link>
                <Link to="/profile">
                  <li>
                    <a>Profile</a>
                  </li>
                </Link>
                <Link to="/payment">
                  <li>
                    <a>Payments</a>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <a>Leave application</a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>
    </div>
  );
};

export default Header2;
