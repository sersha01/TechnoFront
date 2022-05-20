// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./Tasks.module.css"
import style from "./Payment.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Completed from './Completed';
import Pending from './Pending';
import {useState} from 'react'

function Payment() {

  const [active,setActive] = useState("Completed")
  

  return (
    <Row className="m-0 px-3 rounded-2 bg py-3 bglight">
      <Col sm={12} className="d-flex justify-content-between">
        <div>
        {
        active === "Completed" &&  <h2>Payments</h2>
           }
          {active === "Pending" &&  <h2>Pending</h2>
            }
          
        </div>
        <div>
          {active === "Completed" &&  <Button className="paymentpendingbutton w-100 mt-2 me-5"
          onClick={() => {
            setActive("Pending");
          }}>
            Pending
          </Button>}
          {active === "Pending" &&  <Button className="paymentpendingbutton w-100 mt-2 me-5"
          onClick={() => {
            setActive("Completed");
          }}>
            Completed
          </Button>}
          
        </div>
      </Col>
      {active === "Pending" && <Pending/>}
      {active === "Completed" &&  <Completed/>}
     
      

    </Row>
  );
}

export default Payment;
