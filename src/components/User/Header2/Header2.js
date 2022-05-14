import React from 'react'
import { Col } from 'react-bootstrap'
import './Header2.scss'

const Header2 = () => {
  return (
    <div>
      <Col md={12}>
        <nav class="nav">
          <a class="nav-item" href="">
            Dashboard
          </a>
          <a class="nav-item" href="">
            History
          </a>
          <a class="nav-item" href="">
            Statistics
          </a>
          <a class="nav-item" href="">
            Settings
          </a>
        </nav>
      </Col>
    </div>
  )
}

export default Header2
