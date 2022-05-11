// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBox from './components/Nav Box/NavBox';
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import Manifest from './components/Manifest/Manifest';
import Payment from './components/Payment/Payment';

import './App.css';

function App() {
  return (
    <Container>
    <Row className="App">
      <Header />
      <Col className='col-3'>
      <NavBox className='my-2'/>
      <Notification  className='my-2'/>
      </Col>
      <Col className='col-9'>
      <Payment />
      </Col>
      
    </Row>
    </Container>
  );
}

export default App;
