// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Profile.module.css';
import style from "./Profile.module.css";
import wafi from "./wafi.jpg";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import AuthContext from "../../../Context/AuthContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function Profile({by}) {

  const { profile, getMyProfile, updateProfile, user_is, getDomains, domains } = useContext(AuthContext);

  useEffect(() => {
    getDomains();
    if (user_is !== "lead") {
      getMyProfile();
    }
  },[]);

  return (
    <Row className={`m-0 px-3 py-3  rounded-2 ${style.profile}`}>
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

      <form className="row m-0" onSubmit={(e) => {
        e.preventDefault();
        updateProfile(e)}}>
        <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>First name</label>
            <input type="text" name='first_name' className={`w-100 ${style.input}`} defaultValue={profile && profile.first_name }/>
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Last name</label>
            <input type="text" name='last_name' className={`w-100 ${style.input}`} defaultValue={profile && profile.last_name}/>
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Email</label>
            <input type="email" name='email' className={`w-100 ${style.input}`} defaultValue={profile && profile.email} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Mobile</label>
            <input type="tel" name='mobile' className={`w-100 ${style.input}`} defaultValue={profile && profile.mobile} />
          </Col>
        </Col>
        <Col xs={12} md={(user_is != "advisor" && by != "advisor") && 6} className={`py-1 px-0 ${(user_is != "advisor" && by != "advisor") ? "pe-md-1" : "pe-0"}`}>
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Address</label>
            <textarea
              rows="4"
              name='address'
              className={`w-100 ${(style.input, style.textarea)}`}
              defaultValue={profile && profile.address}
            />
          </Col>
        </Col>
        {(user_is != "advisor" && by != "advisor") && <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-2 text-start px-3 rounded-3 mb-2 ${style.inputField}`}
          >
            <FormControl className="w-100">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Domain
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      name="domain"
                      defaultValue={profile && profile.domain && profile.domain.id}
                      autoWidth
                      label="Domain name"
                      maxHeight="200px"
                    >
                      {domains && domains.map((domain) => (
                          <MenuItem key={domain.id} value={domain.id}>
                            {domain.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
          </Col>
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Date of Birth</label>
            <input type="text"  name='dob' className={`w-100 ${style.input}`} defaultValue={profile && profile.dob} />
          </Col>
        </Col>}
        <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Village</label>
            <input type="text" name='village' className={`w-100 ${style.input}`} defaultValue={profile && profile.village} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Education</label>
            <input type="text" name='education' className={`w-100 ${style.input}`} defaultValue={profile && profile.education} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>College</label>
            <input type="text" name='college' className={`w-100 ${style.input}`} defaultValue={profile && profile.college} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Experience</label>
            <input type="text" name='experience' className={`w-100 ${style.input}`} defaultValue={profile && profile.experience} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
          <Col
            className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Company</label>
            <input type="text" name='company' className={`w-100 ${style.input}`} defaultValue={profile && profile.company} />
          </Col>
        </Col>
        <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
          <Col
            className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Designation</label>
            <input type="text" name='designation' className={`w-100 ${style.input}`} defaultValue={profile && profile.designation} />
          </Col>
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
