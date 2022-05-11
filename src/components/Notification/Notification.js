//Bootstrap
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from "./Notification.module.css"
import style from "./Notification.module.css"


function Notification() {
  return (
    <Row className='m-0 rounded-3 py-4  '>
      <Col className={style.notification}>
          <h2>Notification</h2>
      </Col>


      <Col className='text-center' py-2 xs={12}>
          <Row className='m-0'>
          <Col xs={2}>
          <svg height={40} width={40}><circle cx="20" cy="20" r="20" fill="red" /></svg>
          </Col>
          <Col className='text-start' xs={10}>
            <h5 className='m-0'>Notification</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          </Row>
      </Col>

      {/* //////////////////////LOOP START/////////////////////////////// */}

      <Col className='text-center' py-2 xs={12}>
          <Row className='m-0'>
          <Col xs={2}>
          <svg height={40} width={40}><circle cx="20" cy="20" r="20" fill="red" /></svg>
          </Col>
          <Col className='text-start' xs={10}>
            <h5 className='m-0'>Notification</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          </Row>
      </Col>
      <Col className='text-center' py-2 xs={12}>
          <Row className='m-0'>
          <Col xs={2}>
          <svg height={40} width={40}><circle cx="20" cy="20" r="20" fill="red" /></svg>
          </Col>
          <Col className='text-start' xs={10}>
            <h5 className='m-0'>Notification</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          </Row>
      </Col>
      <Col className='text-center' py-2 xs={12}>
          <Row className='m-0'>
          <Col xs={2}>
          <svg height={40} width={40}><circle cx="20" cy="20" r="20" fill="red" /></svg>
          </Col>
          <Col className='text-start' xs={10}>
            <h5 className='m-0'>Notification</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          </Row>
      </Col>
      {/* //////////////////////LOOP END/////////////////////////////// */}
    </Row>
  )
}

export default Notification
