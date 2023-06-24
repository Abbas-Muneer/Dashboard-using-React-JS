import React from "react";
import Chart from "react-apexcharts";
import "./CustomerReview.css";


const CustomerReview = () => {
  return (
    <div className="wide-card">
      <h3>Employee Count</h3>
      <br></br>
      <br></br>
      
      <div className="text-container">
        <div className="text-group">
          <p className="count">8</p>
          <p>Total Employee Count</p>
        </div>
        <div className="text-group">
          <p className="count">8</p>
          <p>Active</p>
        </div>
        <div className="text-group">
          <p className="count">0</p>
          <p>Inactive</p>
        </div>
        <div className="text-group">
          <p className="count">0</p>
          <p>Terminated</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
