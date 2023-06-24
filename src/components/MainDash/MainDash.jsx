import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import CustomerReview from "../CustomerReview/CustomerReview";
import WideCard from "../profile";
import Celebrations from "../celebrations/celebrations";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Home</h1>
      <Cards />
      <br></br>
      <CustomerReview/>
      <br></br>
      <Celebrations/>
      <Table />
    </div>
  );
};

export default MainDash;
