// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Profile.module.css';
import style from "./Profile.module.css";
import wafi from "./thor.jpg";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ProfilePic from "../Crop/Crop";

function Profile({ by }) {
  const { profile, getMyProfile, updateProfile, user, getDomains, domains } = useContext(AuthContext);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (user.position === "Student") {
      getDomains();
    }
    if (user.position !== "Lead") {
      getMyProfile();
    }
  }, []);

    return (
      <Row className={`m-0 p-3 rounded-2 ${style.profile}`}>
        <Col className="text-start ps-2" xs={12}>
          <h2>My Profile</h2>
        </Col>
        <form
          className="row m-0"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile(e);
          }}
        >
          <Col xs={12} md={6} className="p-0">
            <Col className="d-flex justify-content-end pe-3 pt-1">
            <label htmlFor="upload_image" >
              <button className={` px-4 py-2 rounded-3 ${style.button}`}
                onClick={()=>{alert("settakkan und monues")}}>
                Change
              </button>
            </label>
            </Col>
            <Col className={`px-3 py-0 mb-4 d-flex justify-content-center`} >
              <ProfilePic cropped={setImage} />
            </Col>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>First name</label>
                <input
                  type="text"
                  name="first_name"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.first_name}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Last name</label>
                <input
                  type="text"
                  name="last_name"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.last_name}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.dob}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Gender</label>
                <input
                  type="text"
                  name="gender"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.gender}
                />
              </Col>
            </Col>
            {user.position !== "Advisor" &&
              by !== "advisor" &&
              profile &&
              profile.domain && (
                <Col xs={12} className="py-1 px-0">
                  <Col
                    className={`py-2 text-start px-3 rounded-3 ${style.inputField}`}
                  >
                    <FormControl className="w-100">
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Domain
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        name="domain"
                        defaultValue={
                          profile && profile.domain && profile.domain.id
                        }
                        autoWidth
                        label="Domain name"
                        maxHeight="200px"
                      >
                        {domains &&
                          domains.map((domain) => {
                            return (
                              <MenuItem key={domain.id} value={domain.id}>
                                {domain.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Col>
                </Col>
              )}
          </Col>
          <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Email</label>
              <input
                type="email"
                name="email"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.email}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
            <Col
              className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Mobile</label>
              <input
                type="tel"
                name="mobile"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.mobile}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="p-0 pe-md-1">
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Father's Name</label>
                <input
                  type="text"
                  name="father"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.father}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Father's Contact</label>
                <input
                  type="tel"
                  name="father_contact"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.father_contact}
                />
              </Col>
            </Col>
          </Col>
          <Col xs={12} md={6} className="p-0 ps-md-1">
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Mother's Name</label>
                <input
                  type="text"
                  name="mother"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.mother}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Mother's Contact</label>
                <input
                  type="tel"
                  name="mother_contact"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.mother_contact}
                />
              </Col>
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Name of Guardian</label>
              <input
                type="text"
                name="guardian"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.guardian}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 ps-md-1 px-0">
            <Col
              className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>
                Relationship with guardian
              </label>
              <input
                type="text"
                name="relation"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.relation}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 px-0 pe-md-1">
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Address</label>
              <textarea
                rows="4"
                name="address"
                className={`w-100 ${(style.input, style.textarea)}`}
                defaultValue={profile && profile.address}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 px-0 ps-md-1">
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Village</label>
              <input
                type="text"
                name="village"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.village}
              />
            </Col>
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 mt-2 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Taluk</label>
              <input
                type="text"
                name="taluk"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.taluk}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 pe-md-1 px-0">
            <Col
              className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>Education</label>
              <input
                type="text"
                name="education"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.education}
              />
            </Col>
          </Col>
          <Col xs={12} md={6} className="py-1 px-0 ps-md-1">
            <Col
              className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
            >
              <label className={`${style.label}`}>College</label>
              <input
                type="text"
                name="college"
                className={`w-100 ${style.input}`}
                defaultValue={profile && profile.college}
              />
            </Col>
          </Col>

          <Col xs={12} md={6} className="p-0 pe-md-1">
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Experience</label>
                <input
                  type="text"
                  name="experience"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.experience}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Company</label>
                <input
                  type="text"
                  name="company"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.company}
                />
              </Col>
            </Col>
            <Col xs={12} className="py-1 px-0">
              <Col
                className={`py-1 text-start pb-3 ps-3 rounded-3 ${style.inputField}`}
              >
                <label className={`${style.label}`}>Designation</label>
                <input
                  type="text"
                  name="designation"
                  className={`w-100 ${style.input}`}
                  defaultValue={profile && profile.designation}
                />
              </Col>
            </Col>
          </Col>
          <Col className="py-1 px-0 ps-md-1" xs={12} md={6}>
            <Col
              className={`p-2 text-start rounded-3 d-flex justify-content-center ${style.inputField} ${style.heightFull}`}
            >
              <img
                src={image}
                alt="profikjklle"
                className={`${style.proof} w-100`}
              />
            </Col>
          </Col>
          <Col className="m-0 p-0">
            <Col className="submitProfileDiv mt-3">
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
            </Col>
          </Col>
        </form>
      </Row>
    );
}

export default Profile;
