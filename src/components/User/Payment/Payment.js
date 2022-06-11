//Bootstrap
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from './Payment.module.css';
import style from "./Payment.module.css";
import { useContext, useEffect, useState } from "react";
import { ShowChart } from "@mui/icons-material";
import AuthContext from "../../../Context/AuthContext";
import MyPays from "./MyPayements";

function Payment() {
  const {
    showPayment,
    amount,
    status,
    rent,
    shiftpay,
    upfront,
    showUpFront,
    showShiftPayment,
    upfrontamount,
    upfrontstatus,
    shiftamount,
    shiftstatus,
    displayRazorpay,
    rentid,
    upfrontid,
    shiftid,
    myPayments,
    mypay,
  } = useContext(AuthContext);

  const [btn, setBtn] = useState("True");
  const [upfrontbtn, setUpfrontBtn] = useState("True");
  const [shiftbtn, setShiftBtn] = useState("True");
  const [price, setPrice] = useState("");
  const [cash, setCash] = useState("");
  const [upfrontprice, setUpfrontPrice] = useState("");
  const [upfrontcash, setUpfrontCash] = useState("");
  const [shiftprice, setShiftPrice] = useState("");
  const [shiftcash, setShiftCash] = useState("");

  const today = new Date();
  let month = today.toLocaleString("default", { month: "long" });
  let year = new Date().getFullYear();

  useEffect(() => {
    showPayment();
    showUpFront();
    showShiftPayment();
    myPayments();
  }, []);

  return (
    <Row className={`m-0 rounded-2 px-3 ${style.payment}`}>
      <Col className="text-start pt-4 pb-2" xs={12}>
        <h3>My Payments</h3>
      </Col>

      {rent && (
        <Col xs={12} className={`rounded-3 p-3  ${style.crDiv}`}>
          <Row className="m-0">
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>
                {month} {year}
              </h5>
              <h3 className={`${style.crCash}`}>₹{amount}</h3>
            </Col>
            <Col xs={8} className={`text-start d-flex ps-md-4`}>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Last Date:</h5>
                <h5 className={`${style.lastDate}`}>
                  03/{month}/{year}
                </h5>
                <div className="mt-3">
                  <h5 className={`${style.crMonth}`}>Type:</h5>
                  <h5 className={`${style.lastDate} textinfo`}>Rent</h5>
                </div>
              </Col>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Status: </h5>
                <h5 className={` ${style.status}`}>{status}</h5>
              </Col>
            </Col>
          </Row>

          {btn === "True" && (
            <Row className="mx-0 my-2 paybutton">
              <Col xs={4}>
                <Button
                  size="lg"
                  onClick={() => displayRazorpay(amount, "Rent", rentid)}
                  className={`w-100 ${style.btn}`}
                >
                  UPI
                </Button>
              </Col>
              <Col xs={4}>
                <Button size="lg" className={`w-100 ${style.btn}`}>
                  Cash
                </Button>
              </Col>
              <Col xs={4}>
                <Button
                  size="lg"
                  className={`w-100 ${style.btn}`}
                  onClick={() => {
                    setBtn("False");
                  }}
                >
                  Both
                </Button>
              </Col>
            </Row>
          )}

          {btn === "False" && (
            <Row className="mx-0 amount">
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter UPI Amount"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter Cash Amount"
                  value={cash}
                  onChange={(e) => setCash(e.target.value)}
                />
              </Col>
              <Col className="row m-0" md={4} xs={12}>
                <Col className="ps-0 pe-1" md={6} xs={6}>
                  <Button
                    size="lg"
                    onClick={() => {
                      if (price + cash > amount) {
                        alert("Amount is greater than the rent amount");
                      } else {
                        displayRazorpay(price + cash, "Rent", rentid);
                        setBtn("True");
                      }
                    }}
                    className={`w-100 ${style.btn}`}
                  >
                    Submit
                  </Button>
                </Col>
                <Col className="ps-1 pe-0" md={6} xs={6}>
                  <Button
                    size="lg"
                    className={`w-100 ${style.btnCancel}`}
                    onClick={() => {
                      setBtn("True");
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Col>
            </Row>
          )}
        </Col>
      )}
      {upfront && (
        <Col xs={12} className={`rounded-3 p-3  ${style.crDiv}`}>
          <Row className="m-0">
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>
                {month} {year}
              </h5>
              <h3 className={`${style.crCash}`}>₹{upfrontamount}</h3>
            </Col>
            <Col xs={8} className={`text-start d-flex ps-md-4`}>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Last Date:</h5>
                <h5 className={`${style.lastDate}`}>
                  03/{month}/{year}
                </h5>
                <div className="mt-3">
                  <h5 className={`${style.crMonth}`}>Type:</h5>
                  <h5 className={`${style.lastDate} textinfo`}>Upfront</h5>
                </div>
              </Col>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Status: </h5>
                <h5 className={` ${style.status}`}>{upfrontstatus}</h5>
              </Col>
            </Col>
          </Row>

          {upfrontbtn === "True" && (
            <Row className="mx-0 my-2 paybutton">
              <Col xs={4}>
                <Button
                  size="lg"
                  onClick={() =>
                    displayRazorpay(upfrontamount, "Upfront", upfrontid)
                  }
                  className={`w-100 ${style.btn}`}
                >
                  UPI
                </Button>
              </Col>
              <Col xs={4}>
                <Button size="lg" className={`w-100 ${style.btn}`}>
                  Cash
                </Button>
              </Col>
              <Col xs={4}>
                <Button
                  size="lg"
                  className={`w-100 ${style.btn}`}
                  onClick={() => {
                    setUpfrontBtn("False");
                  }}
                >
                  Both
                </Button>
              </Col>
            </Row>
          )}

          {upfrontbtn === "False" && (
            <Row className="mx-0 amount">
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter UPI Amount"
                  value={upfrontprice}
                  onChange={(e) => setUpfrontPrice(e.target.value)}
                />
              </Col>
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter Cash Amount"
                  value={upfrontcash}
                  onChange={(e) => setUpfrontCash(e.target.value)}
                />
              </Col>
              <Col className="row m-0" md={4} xs={12}>
                <Col className="ps-0 pe-1" md={6} xs={6}>
                  <Button
                    size="lg"
                    onClick={() => {
                      if (upfrontprice + upfrontcash > upfrontamount) {
                        alert("Amount is greater than the upfront amount");
                      } else {
                        displayRazorpay(
                          upfrontprice + upfrontcash,
                          "Upfront",
                          upfrontid
                        );
                        setUpfrontBtn("True");
                      }
                    }}
                    className={`w-100 ${style.btn}`}
                  >
                    Submit
                  </Button>
                </Col>
                <Col className="ps-1 pe-0" md={6} xs={6}>
                  <Button
                    size="lg"
                    className={`w-100 ${style.btnCancel}`}
                    onClick={() => {
                      setUpfrontBtn("True");
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Col>
            </Row>
          )}
        </Col>
      )}
      {shiftpay && (
        <Col xs={12} className={`rounded-3 p-3  ${style.crDiv}`}>
          <Row className="m-0">
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>
                {month} {year}
              </h5>
              <h3 className={`${style.crCash}`}>₹{shiftamount}</h3>
            </Col>
            <Col xs={8} className={`text-start d-flex ps-md-4`}>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Last Date:</h5>
                <h5 className={`${style.lastDate}`}>
                  03/{month}/{year}
                </h5>
                <div className="mt-3">
                  <h5 className={`${style.crMonth}`}>Type:</h5>
                  <h5 className={`${style.lastDate} textinfo`}>Batch Shift</h5>
                </div>
              </Col>
              <Col xs={6} className={`text-start ps-md-4`}>
                <h5 className={`${style.crMonth}`}>Status: </h5>
                <h5 className={` ${style.status}`}>{shiftstatus}</h5>
              </Col>
            </Col>
          </Row>

          {shiftbtn === "True" && (
            <Row className="mx-0 my-2 paybutton">
              <Col xs={4}>
                <Button
                  size="lg"
                  onClick={() =>
                    displayRazorpay(shiftamount, "BatchShift", shiftid)
                  }
                  className={`w-100 ${style.btn}`}
                >
                  UPI
                </Button>
              </Col>
              <Col xs={4}>
                <Button size="lg" className={`w-100 ${style.btn}`}>
                  Cash
                </Button>
              </Col>
              <Col xs={4}>
                <Button
                  size="lg"
                  className={`w-100 ${style.btn}`}
                  onClick={() => {
                    setShiftBtn("False");
                  }}
                >
                  Both
                </Button>
              </Col>
            </Row>
          )}

          {shiftbtn === "False" && (
            <Row className="mx-0 amount">
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter UPI Amount"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
              <Col md={4} xs={6}>
                <input
                  type="text"
                  className={`w-100 ps-2 pt-2 pb-3 rounded-3 ${style.input}`}
                  placeholder="Enter Cash Amount"
                  value={cash}
                  onChange={(e) => setCash(e.target.value)}
                />
              </Col>
              <Col className="row m-0" md={4} xs={12}>
                <Col className="ps-0 pe-1" md={6} xs={6}>
                  <Button
                    size="lg"
                    className={`w-100 ${style.btn}`}
                    onClick={() => {
                      if (price + cash > shiftamount) {
                        alert("Amount is greater than the shift amount");
                      } else {
                        displayRazorpay(price + cash, "BatchShift", shiftid);
                        setBtn("True");
                      }
                    }}
                  >
                    Submit
                  </Button>
                </Col>
                <Col className="ps-1 pe-0" md={6} xs={6}>
                  <Button
                    size="lg"
                    className={`w-100 ${style.btnCancel}`}
                    onClick={() => {
                      setShiftBtn("True");
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Col>
            </Row>
          )}
        </Col>
      )}

      <MyPays></MyPays>
    </Row>
  );
}

export default Payment;
