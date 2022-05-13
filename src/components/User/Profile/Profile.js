// Bootstrap
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Profile.module.css';
import style from './Profile.module.css';





function Profile() {
  return (
    <Row className={`m-0 px-3 py-3 rounded-2 ${style.profile}`}>
      <Col className='text-start ps-2' xs={12}>
        <h2>My Profile</h2>
      </Col>
      <Col className='p-0 d-flex mb-4' xs={12}>
      <svg height={300} width={300} className='offset-4 col-4'><circle cx="150" cy="150" r="150" fill="#334A52" /></svg>
      <button className={`align-self-start px-4 py-2 rounded-3 ${style.button}`}>Change</button>
      </Col>


      <form className='row m-0'>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Full name</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} md={6} className='my-1 ps-0 pe-1'><Col className={`py-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Domain</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col></Col>
          <Col xs={12} md={6} className='my-1 ps-1 pe-0'><Col className={`py-1 text-start ps-3 rounded-3 ${style.inputField}`}>
            <label className={`${style.label}`}>Date of Birth</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Address</label>
          <textarea rows='4' className={`w-100 ${style.input, style.textarea}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Education</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Collage</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Experience</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Company</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Email</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>
        <Col xs={12} className={`py-1 my-1 text-start ps-3 rounded-3 ${style.inputField}`}>
          <label className={`${style.label}`}>Mobile</label>
          <input type='text' className={`w-100 ${style.input}`} /></Col>

      </form>

    
      
    </Row>
  )
}

export default Profile
