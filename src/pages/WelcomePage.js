import "../styles/styles.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const WelcomePage = ({ onPrevious, onNext }) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };
  return (
    <>
      <div className="welcome">
        <div className="welcome-heading">
          <h1>Welcome to PopX</h1>
        </div>
        <div className="sign-para">
          <p>Lorem ipsum dolor sit amet, consectetur adipisching elit,</p>
        </div>

        <button className="create-btn">Create Account</button>
        <br />
        <br />
        <button className="register-btn">Already Register? Login</button>
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

export default WelcomePage;
