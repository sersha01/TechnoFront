import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import Chart from "../../Common/Chart/Chart";
import AuthContext from "../../../Context/AuthContext";

const MySpace = () => {
  const { chartData, getChartData } = useContext(AuthContext);
  useEffect(() => {
    getChartData();
  },[]);
  return (
    <>
      {chartData && (
      <Row className="mt-5 col-11 chartspage ">
        <Chart data={chartData}/>
      </Row>)}
    </>
  );
};

export default MySpace;
