//Bootstrap
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import style from './Payment.module.css';
import style from "./Payment.module.css";
import { useContext, useEffect, useState } from "react";
import { ShowChart } from "@mui/icons-material";
import AuthContext from "../../../Context/AuthContext";


const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (price) => {
  const response = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );
  if (!response) {
    alert("You are offline");
    return;
  }

  const options = {
    key: "rzp_test_aRq4XkP2vJ58Xt",
    currency: "INR",
    amount: 400000,
    name: "BrotoType",
    description: "Paying your Co-working rent ",
    image: "https://i.imgur.com/3g7nmJC.png",

    handler: function (response) {
      alert("Payment Successful");
      alert(response.razorpay_payment_id);
    },

    prefill: {
      name: "Michu",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

function Payment() {
  const { showPayment,amount,month,year } = useContext(AuthContext);

  const [pay, setPay] = useState(true);
  const [btn, setBtn] = useState("True");
  const [price, setPrice] = useState(0);
  const [cash, setCash] = useState(0);

  useEffect(() => {
    showPayment();
  }, []);

  return (
    <Row className={`m-0 rounded-2 px-3 ${style.payment}`}>
      <Col className="text-start pt-4 pb-2" xs={12}>
        <h3>My Payments</h3>
      </Col>
      {pay && (
        <Col xs={12} className={`rounded-3 p-3  ${style.crDiv}`}>
          <Row className="m-0">
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>{month} {year}</h5>
              <h3 className={`${style.crCash}`}>${amount}</h3>
            </Col>
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>Last Date:</h5>
              <h5 className={`${style.lastDate}`}>03/{month}/{year}</h5>
            </Col>
            <Col xs={4} className={`text-start ps-md-4`}>
              <h5 className={`${style.crMonth}`}>Status</h5>
              <h5 className={` ${style.status}`}>PENDING</h5>
            </Col>
          </Row>

          {btn === "True" && (
            <Row className="mx-0 my-2 paybutton">
              <Col xs={4}>
                <Button
                  size="lg"
                  onClick={() => displayRazorpay(price)}
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
                />
              </Col>
              <Col className="row m-0" md={4} xs={12}>
                <Col className="ps-0 pe-1" md={6} xs={6}>
                  <Button
                    size="lg"
                    onClick={() => displayRazorpay(price)}
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

      <Col
        xs={12}
        className={`rounded-3 pt-4 pb-2 px-3 py-5 pb-3 row mx-0 my-3 ${style.crDiv}`}
      >
        <Col className="text-start " xs={4}>
          <h6 className={` ${style.crMonth}`}>January 2022</h6>
          <h3 className={`${style.crCash}`}>$4000</h3>
        </Col>
        <Col className="text-start " xs={4}>
          <h6 className={` ${style.crMonth}`}>Status</h6>
          <h6 className={` ${style.status}`}>PAID SUCCESSFULLY</h6>
          <h6 className={` ${style.crMonth}`}>Date :</h6>
          <h6 className={` ${style.lastDate}`}>03/01/2022</h6>
        </Col>
        <Col className="text-start " xs={4}>
          <h6 className={` ${style.crMonth}`}>Type</h6>
          <h6 className={` ${style.lastDate}`}>Cash and UPI</h6>
        </Col>
      </Col>
      
    </Row>
  );
}

export default Payment;
