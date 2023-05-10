import React, { useState } from "react";
import "../styles/styles.css";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const AccountSetting = ({ onPrevious, onNext }) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };
  return (
    <>
      <div className="account-setting">
        <div className="account-heading">
          <h1>Account Setting</h1>
        </div>
        <div className="account-details">
          <div className="mary-details">
            <div className="images">
              <img className="img1" src="./marry.png" alt="img" />
              <img className="img2" src="./camera.png" alt="imge" />
            </div>
            <div className="mary-data">
              <div className="mary-name">
                <p>
                  <bold>Marry Doe</bold>
                </p>
              </div>
              <div className="mary-email">
                <p>Marry@Gmail.Com</p>
              </div>
            </div>
          </div>
          <div className="account-para">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <AiFillHome style={{ width: "30px", height: "30px" }} />
        <button id="btn-prev" onClick={handlePrevious}>
          <AiOutlineLeft style={{ width: "20px", height: "20px" }} />
        </button>
        <p className="show">1 of 4</p>
        <button id="btn-next" onClick={handleNext}>
          <AiOutlineRight style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
    </>
  );
};

export default AccountSetting;
