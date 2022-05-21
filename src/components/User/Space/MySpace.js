import React from "react";
import { Row, Accordion, Table } from "react-bootstrap";
import draw from "./draw.svg";
import './MySpace.css'

const MySpace = () => {
  return (
    <div>
      <Row className="mt-5">
        <img width="500px" height="500px" src={draw} alt=''/>
        <h1 className="text-center mt-5">
          Welcome to <br></br> Django + React{" "}
        </h1>
      </Row>
      <Row className="m-5 col-4 bg-white">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>My Tasks</Accordion.Header>
            <Accordion.Body>
              <Table hover>
                <tbody>
                  <tr>
                    <td>Task 1</td>
                  </tr>
                  <tr>
                    <td>Task 2</td>
                  </tr>
                  <tr>
                    <td>Task 3</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pending</Accordion.Header>
            <Accordion.Body>
              <Table hover>
                <tbody>
                  <tr>
                    <td>Pending 1</td>
                  </tr>
                  <tr>
                    <td>Pending 2</td>
                  </tr>
                  <tr>
                    <td>Pending 3</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <Accordion flush>
          <Accordion.Item eventKey="2">
            <Accordion.Header>My Batch</Accordion.Header>
            <Accordion.Body>
              <Table hover>
                
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>Mark</td>

                    <td>17</td>
                  </tr>
                  <tr>
                    <td>#2</td>
                    <td>Jacob</td>

                    <td>18</td>
                  </tr>
                  <tr>
                    <td>#3</td>
                    <td>Larry the Bird</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </div>
  );
};

export default MySpace;
