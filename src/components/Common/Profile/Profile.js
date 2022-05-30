// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Profile.module.css';
import style from "./Profile.module.css";
import wafi from "./wafi.jpg";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import AuthContext from "../../../Context/AuthContext";

function Profile() {

  const { profile, getProfile, updateProfile } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  },[]);

  return (
    <Row className={`m-0 px-3 py-3 rounded-2 ${style.profile}`}>
      <Col className="text-start ps-2" xs={12}>
        <h2>My Profile</h2>
      </Col>
      <Col className="d-flex justify-content-end">
        <button className={` px-4 py-2 rounded-3 ${style.button}`}>
          Change
        </button>
      </Col>
      <Col className="p-0 d-flex mb-4" xs={12}>
        <div className="d-flex justify-content-center">
          <img
            src={wafi}
            className="imgss"
            width="50%"
            style={{ borderRadius: "50%" }}
            alt='profile pic'
            defaultValue={profile && profile.profile_pic}
          ></img>
        </div>
      </Col>

      <form className="row m-0" onSubmit={(e) => updateProfile(e)}>
        <Col
          xs={12}
          className={`py-1 pb-3 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>First name</label>
          <input type="text" name='first_name' className={`w-100 ${style.input}`} defaultValue={profile && profile.first_name }/>
        </Col>
        <Col
          xs={12}
          className={`py-1 pb-3 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Last name</label>
          <input type="text" name='last_name' className={`w-100 ${style.input}`} defaultValue={profile && profile.last_name}/>
        </Col>
        <Col xs={12} md={6} className="my-1 pb-3 ps-0 pe-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Domain</label>
            <input type="text"  name='domain' className={`w-100  ${style.input}`} defaultValue={profile && profile.domain && profile.domain.name} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="my-1 pb-3 ps-1 pe-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Date of Birth</label>
            <input type="text"  name='dob' className={`w-100 ${style.input}`} defaultValue={profile && profile.dob} />
          </Col>
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Address</label>
          <textarea
            rows="4"
            name='address'
            className={`w-100 ${(style.input, style.textarea)}`}
            defaultValue={profile && profile.address}
          />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Village</label>
          <input type="text" name='village' className={`w-100 ${style.input}`} defaultValue={profile && profile.village} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Education</label>
          <input type="text" name='education' className={`w-100 ${style.input}`} defaultValue={profile && profile.education} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>College</label>
          <input type="text" name='college' className={`w-100 ${style.input}`} defaultValue={profile && profile.college} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Experience</label>
          <input type="text" name='experience' className={`w-100 ${style.input}`} defaultValue={profile && profile.experience} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Company</label>
          <input type="text" name='company' className={`w-100 ${style.input}`} defaultValue={profile && profile.company} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Designation</label>
          <input type="text" name='designation' className={`w-100 ${style.input}`} defaultValue={profile && profile.designation} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Email</label>
          <input type="email" name='email' className={`w-100 ${style.input}`} defaultValue={profile && profile.email} />
        </Col>
        <Col
          xs={12}
          className={`py-1 my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
        >
          <label className={`${style.label}`}>Mobile</label>
          <input type="tel" name='mobile' className={`w-100 ${style.input}`} defaultValue={profile && profile.mobile} />
        </Col>
        <Col className="m-0 p-0">
          <div className="submitProfileDiv mt-3">
            <Button
              className="submitProfile"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="submitProfile ms-3 bg-dark text-white"
             
              color="primary"
            >
              Cancel
            </Button>
          </div>
        </Col>
      </form>
    </Row>
  );
}

export default Profile;
