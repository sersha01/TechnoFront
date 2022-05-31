//Bootstrap
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import check icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import style from './Manifest.module.css';
import style from './Manifest.module.css';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../Context/AuthContext';
import AddTask from '../AddTask/AddTask';

function Manifest({manifestId}) {

  const { getStudentManifest, studentManifest } = useContext(AuthContext);

  useEffect(()=>{
      getStudentManifest(45);
  },[])

  return (
    <Row className={`m-0 ${style.manifest}`}>
        <Col className={`text-center py-2 mb-4 rounded-3 ${style.head}`} xs={12}>
            {studentManifest ? studentManifest.title : 'Week'}
        </Col>
        
        <Col className={`row mx-0 my-3 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h6 className={`ps-3 ${style.label}`}>Tasks</h6>
            </Col>
            <Col className={`row`} xs={8}>
                {studentManifest && studentManifest.tasks.map((task, index) => {
                    return (
                <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" defaultValue={"Task 1"} className={`col-11 ${style.input}`}  />
                <CheckCircleIcon className='col-1'/>
                </Col>
                // <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" defaultValue={"Task 2"} className={`col-11 ${style.input}`} />
                // <CheckCircleIcon className='col-1'/>
                // </Col>
                // <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" defaultValue={"Task 3"} className={`col-11 ${style.input}`} />
                // <CheckCircleIcon className='col-1'/>
                // </Col>
                )})}
                <Col xs={11} className={`rounded-3 py-2 my-1 ${style.todoDiv}`}><input type="text" defaultValue={'Add New Task'} className={`col-11 ${style.input}`}  />
                <AddCircleOutlineRoundedIcon className='col-1'/>
                </Col>
            </Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h6 className={`ps-3 ${style.label}`}>Personal Workout</h6>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><textarea rows={3} defaultValue={studentManifest && studentManifest.personal_wo} className={`col-11 rounded-3 ${style.input}`} /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h6 className={`ps-3 ${style.label}`}>Personal score</h6>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" defaultValue={studentManifest && studentManifest.misc_score} className={`col-11 rounded-3 ${style.input}`} /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h6 className={`ps-3 ${style.label}`}>Technical Score</h6>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" defaultValue={studentManifest && studentManifest.techical_score} className={`col-11 rounded-3 ${style.input}`} /></Col>
        </Col>
        <Col className={`row mx-0 my-1 text-start`} xs={12}>
            <Col className={`py-2 ps-5`} xs={4}>
                <h6 className={`ps-3 ${style.label}`}>Total Score</h6>
            </Col>
            <Col className={`row m-0 p-0 pe-4`} xs={8}><input type="text" defaultValue={studentManifest && studentManifest.techical_score + studentManifest.misc_score} className={`col-11 rounded-3 ${style.input}`} /></Col>
        </Col>
       
        <Col className='mt-5 d-flex justify-content-center' xs={12}><Col xs={9}><input type="text" className={`w-100 py-2 rounded-3 ${style.input}`} /></Col></Col>
        <Col className='my-2 d-flex justify-content-center' xs={12}><Col xs={9}><input type="text" className={`w-100 py-2 rounded-3 ${style.input}`} /></Col></Col>


        <div className='d-flex justify-content-center mt-3'>
            <div className="mx-3"><AddTask title="Repeat" value="repeated"  /></div>
            <div> <AddTask title="Completed" value="completed" /></div>
           
        </div>
        
      
    </Row>
  )
}

export default Manifest
