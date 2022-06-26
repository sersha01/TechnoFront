// Bootstrap
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Payment.module.css";
import Button from "@mui/material/Button";
import Completed from "./Completed";
import Pending from "./Pending";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";

function Payment() {
  const { allPendingPayments, allCompletedPayments } = useContext(AuthContext);
 
  const [batch, setBatch] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    allPendingPayments();
    allCompletedPayments();
  }, []);

  const [active, setActive] = useState("Completed");

  return (
    <Row className="m-0 px-3 rounded-2 bg py-3 bglight">
      <Col sm={12} className="d-flex justify-content-between">
        <div>
          {active === "Completed" && <h2>Payments</h2>}
          {active === "Pending" && <h2>Pending</h2>}
        </div>
        <div className="d-flex justify-content-end textlight">
          <Col
            xs={4}
            className={`py-1 my-1 textwhite mx-2 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className={`w-100 ${style.input}`} />
          </Col>

          <Col
            xs={4}
            className={`py-1 textwhite my-1 pb-3 text-start ps-3 rounded-3 ${style.inputField}`}
          >
            <label className={`${style.label}`}>Batch</label>
            <input type="text" value={batch} onChange={(e)=>{setBatch(e.target.value)}} className={`w-100 ${style.input}`} />
          </Col>

          <Button className=" mx-1 searchbtn">
            <ManageSearchRoundedIcon />
          </Button>
        </div>
        <div>
          {active === "Completed" && (
            <Button
              className="paymentpendingbutton w-100 mt-2 me-5"
              onClick={() => {
                setActive("Pending");
              }}
            >
              Pending
            </Button>
          )}
          {active === "Pending" && (
            <Button
              className="paymentpendingbutton w-100 mt-2 me-5"
              onClick={() => {
                setActive("Completed");
              }}
            >
              Completed
            </Button>
          )}
        </div>
      </Col>
      {active === "Pending" && <Pending name={name} batch={batch} />}
      {active === "Completed" && <Completed name={name} batch={batch} />}
    </Row>
  );
}

export default Payment;
