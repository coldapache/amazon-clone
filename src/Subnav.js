import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import "./Subnav.css";

function Subnav() {
  return (
    <div className="subnav__main">
      <div className="subnav__left">
        <div className="subnav__globalLocation">
          <div className="subnav__globalLocation__icon">
            <LocationOnOutlinedIcon fontSize="medium" />
          </div>
          <div className="subnav__globalLocation__text">
            <span className="subnav__globalLocation__textTop">
              Deliver to Micah
            </span>
            <span className="subnav__globalLocation__textBottom">
              {" "}
              Honolulu, 96818
            </span>
          </div>
        </div>
      </div>
      <div className="subnav__mid">
        <div className="subnav__mid__wrapper">
          <span className="subnav__mid__item">
            <a href="#">Customer Service</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">Best Sellers</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">#FoundItOnAmazon</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">Micah's Amazon.com</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">Today's Deals</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">Buy Again</a>
          </span>
          <span className="subnav__mid__item">
            <a href="#">Prime Video</a>
          </span>
        </div>
      </div>
      
      <div className="subnav__right">
        <div className="subnav__right__wrapper">
          <span className="subnav__right__item">
            <a href="#">Podcasts now streaming</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subnav;
