import React from "react";
import { Row, Accordion, Table } from "react-bootstrap";
import draw from "./draw.svg";

const MySpace = () => {
  return (
    <div>
      <Row className="mt-5">
        <img width="500px" height="500px" src={draw} />
        <h1 className="text-center mt-5">
          Welcome to <br></br> Django + React{" "}
        </h1>
      </Row>
      
    </div>
  );
};

export default MySpace;
