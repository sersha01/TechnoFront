import React, { useContext, useEffect } from "react";
import { Row, Accordion, Table } from "react-bootstrap";
import Chart from "../../Common/Chart/Chart";
import AuthContext from "../../../Context/AuthContext";

const MySpace = () => {
  const { chartData, getChartData } = useContext(AuthContext);
  useEffect(() => {
    getChartData();
  },[]);
  return (
    <div>
      {chartData && (
      <Row className="mt-5 bg">
        <Chart data={chartData}/>
      </Row>)}
    </div>
  );
};

export default MySpace;
