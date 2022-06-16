import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import './MySpace.css'
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
// Radar (labels, label, data, bgColor, borderColor, borderWidth)
// Doughnut (labels, label, data, bgColor, borderColor, borderWidth)
// Line (labels, label, data, bgColor, borderColor, title)
// Bar (labels, label, data, bgColor, borderColor)
// Pie (labels, label, data, bgColor, borderColor, borderWidth)
