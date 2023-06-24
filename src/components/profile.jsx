import React from 'react';
import "./profile.css"
import profile from "../imgs/profile.png"


const WideCard = () => {
  return (
    <div className="widecard">
      <div className="profile">
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <p className="name">Bavanitha Gugan</p>

          <p className="email">bavanitha@zeloratech.com</p>
        </div>
      </div>
      <div className="button-container">
        <button className="wide-button">Request Time-Off</button>
        <button className="small-button">
          <i className="fa fa-calendar"></i>
        </button>
      </div>
    </div>
  );
};

export default WideCard;
