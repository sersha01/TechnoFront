//Bootstrap
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import check icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import style from './Manifest.module.css';
import style from './Manifest.module.css';

function Manifest() {
  return (
    <Row className={`m-0 ${style.manifest}`}>
        <Col className={`text-center py-2 mb-4 rounded-3 ${style.head}`} xs={12}>
            WEEK 17
        </Col>
        
        <Col className={`row mx-0 my-3 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Tasks</h5>
            </Col>
            <Col className={`row`} xs={8}>
                <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" value={"hello"} className={`col-11 ${style.input}`} disabled />
                <CheckCircleIcon className='col-1'/>
                </Col>
                <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" value={"hello"} className={`col-11 ${style.input}`} disabled />
                <CheckCircleIcon className='col-1'/>
                </Col>
                <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" value={"hello"} className={`col-11 ${style.input}`} disabled />
                <CheckCircleIcon className='col-1'/>
                </Col>
            </Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Reveiwer</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Reveiw Date</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Personal Workout</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><textarea rows={3} value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Miscellaneous</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><textarea rows={3} value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Next Review</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>English Review</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Personal score</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Technical Score</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h5 className={`ps-3 ${style.label}`}>Total Score</h5>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" value={"hello"} className={`col-11 rounded-3 ${style.input}`} disabled /></Col>
        </Col>
        <Col className='my-1 d-flex justify-content-center' xs={12}><Col xs={9}><input type="text" className={`w-100 py-2 rounded-3 ${style.input}`} disabled /></Col></Col>
        <Col className='my-1 d-flex justify-content-center' xs={12}><Col xs={9}><input type="text" className={`w-100 py-2 rounded-3 ${style.input}`} disabled /></Col></Col>
        
      
    </Row>
  )
}

export default Manifest
