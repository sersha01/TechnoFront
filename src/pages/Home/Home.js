import React, { useState,useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./Login";
import Signup from "./Signup";
import UserReg from "../../pages/User/UserLogin/UserReg";
import AuthContext from '../../Context/AuthContext';

const Home = () => {
  let { swap,swap2,setSwap,setSwap2 } = useContext(AuthContext);
 
  const theme = createTheme();

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="m-0 p-0 bglight">
      <Container fluid className="bglight m-0 p-0 mb-5">
        <div className="pt-3 bs  p-0 pb-3 m-0 ps-5 d-flex justify-content-between">
          <div className="ps-5">
            <h2
              className="cp"
              onClick={() => {
                setSwap("video");
                setSwap2("video");
              }}
            >
              <span id="h11">BROCAMP (SPS)</span>
              <span id="sub">
                by <span id="bro">BRO</span>TOTYPE
              </span>
            </h2>
          </div>
          <div className="pe-5 d-flex">
            <input type="checkbox" id="checkbox" onChange={handleDarkMode} />
            <Button
              color="warning"
              variant="contained"
              onClick={() => {
                if (swap === "video") {
                  setSwap("login");
                } else {
                  setSwap("video");
                }
              }}
            >
              Sign in to the Console
            </Button>
          </div>
        </div>

        {swap2 === "video" && (
          <Container fluid className="p-4 pb-5">
            <Row>
              <Col md={7} className=" d-flex justify-content-center">
                {swap === "video" && (
                  <iframe
                    width="700px"
                    className="mt-5"
                    height="fit-content"
                    src="https://www.youtube.com/embed/I9QGnNvrmoY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
                {swap === "login" && (
                  <Login setSwap={setSwap} setSwap2={setSwap2} />
                )}
              </Col>
              <Col md={5}>
                <br />
                <br />
                <h1 id="h">
                  No Tution Fee,
                  <br />
                  Upfront,
                  <br />
                  Pay Only When
                  <br />
                  You Earn.
                </h1>
                <br />
                <br />
                <p id="a">
                  From Zero to a high paid Software Engineer in 180
                  <br />
                  days.
                </p>
                <br />
                <button id="btn1">
                  <a href="https://brototype.in/application/index.html">
                    Apply now
                  </a>
                </button>
                <br />
                <br />
                <p id="a">
                  (NB: Read all the FAQs carefully before
                  <br />
                  you submit the application)
                </p>
              </Col>
            </Row>
          </Container>
        )}

        {swap2 === "signup" && <><Signup setSwap2={setSwap2} />  <UserReg/></>}
      </Container>
      <Container fluid className="c2 py-5">
        <h1 className="text-center mb-5">Features</h1>
        <Row className="px-5 d-flex justify-content-center">
          <Col md={3} className="p-5 mx-3 boxes">
            <GroupsIcon className="ficons" />
            <p id="hf">Wee win like an army</p>
            <br />
            <p id="pf">
              We work as a team because
              <br />
              we get paid only when you <br />
              get paid
            </p>
          </Col>
          <Col md={3} className="p-5 mx-3 boxes">
            <GroupsIcon className="ficons" />
            <p id="hf">Wee win like an army</p>
            <br />
            <p id="pf">
              We work as a team because
              <br />
              we get paid only when you <br />
              get paid
            </p>
          </Col>
          <Col md={3} className="p-5 mx-3 boxes">
            <GroupsIcon className="ficons" />
            <p id="hf">Wee win like an army</p>
            <br />
            <p id="pf">
              We work as a team because
              <br />
              we get paid only when you <br />
              get paid
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
