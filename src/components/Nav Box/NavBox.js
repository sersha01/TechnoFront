//Bootstrap
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from NavBox.module.css
import style from "./NavBox.module.css"



function NavBox() {
  return (
    <Row className='m-0 rounded-3 py-4'>
      <Col className={`pe-0 row m-0 justify-content-end text-center position-relative ${style.navItems}`} xs={12}>
       <Col className='my-2' xs={11}>
          Home
        </Col>
        <Col className='ps-2' xs={1}>
          <div className={`px-2 ${style.navSelected, style.navItems}`}> </div>
        </Col>
      </Col>
      
      <Col className={`text-center py-2 ${style.navItems}`} xs={12}>
          My Tasks
      </Col>
      <Col className={`text-center py-2 ${style.navItems}`} xs={12}>
          MY Profile
      </Col>
      <Col className={`text-center py-2 ${style.navItems}`} xs={12}>
          My Payments
      </Col>
    </Row>
  )
}

export default NavBox
