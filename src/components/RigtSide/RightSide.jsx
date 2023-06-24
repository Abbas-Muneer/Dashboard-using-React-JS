import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import WideCard from "../profile";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Who's Out</h3>
        <Updates />
        
        <WideCard/>
      </div>
    </div>
  );
};

export default RightSide;
