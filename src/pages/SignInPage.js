import React from "react";
import "../styles/styles.css";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const SignInPage = ({ onPrevious, onNext }) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };
  return (
    <>
      <div className="signInPage">
        <div className="sign-heading">
          <h1>Signin to your PopX account</h1>
        </div>
        <div className="sign-para">
          <p>Lorem ipsum dolor sit amet, consectetur adipisching elit,</p>
        </div>
        <div className="input-wrapper">
          <label className="email" htmlFor="email">
            Email Address
          </label>
          <input type="text" id="email" placeholder="Enter email address" />
        </div>

        <div className="input-wrapper">
          <label className="password" htmlFor="password">
            Password
          </label>
          <input type="text" id="password" placeholder="Enter password" />
        </div>
        <button className="login">Login</button>
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

export default SignInPage;
