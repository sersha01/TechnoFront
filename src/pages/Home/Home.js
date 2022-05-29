import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import GroupsIcon from "@mui/icons-material/Groups";

const Home = () => {
  return (
    <>
      <Container fluid className="bg">
        <div className="pt-3 ps-5">
          <h1>
            <span id="h11">BROCAMP (SPS)</span>
            <span id="sub">
              by <span id="bro">BRO</span>TOTYPE
            </span>
          </h1>
          <hr />
        </div>

        <Container fluid>
          <Row>
            <Col md={7} className="mt-5 d-flex justify-content-center">
              <iframe
                width="700px"
                height="fit-content"
                src="https://www.youtube.com/embed/I9QGnNvrmoY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
              <button id="btn1"><a href="https://brototype.in/application/index.html">Apply now</a></button>
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
      </Container>
      <Container fluid className="c2">
        <Row>
          <h1 className="text-center mt-5">Features</h1>
          <Col md={4} className="p-3 boxes">
            <GroupsIcon />
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
    </>
  );
};

export default Home;
