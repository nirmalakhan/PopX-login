import "../styles/styles.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const CreateAccount = ({ onPrevious, onNext }) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrevious = () => {
    onPrevious();
  };
  return (
    <>
      <div className="createAccount">
        <div className="create-heading">
          <h1>Create your PopX account</h1>
        </div>
        <div className="input-wrapper">
          <label className="label" htmlFor="fullName">
            Full Name <span>*</span>
          </label>
          <input className="create-input" placeholder="Marry Doe" />
        </div>
        <div className="input-wrapper">
          <label className="label" htmlFor="phoneNumber">
            Phone number <span>*</span>
          </label>
          <input className="create-input" placeholder="Marry Doe" />
        </div>
        <div className="input-wrapper">
          <label className="label" htmlFor="email">
            Email address <span>*</span>
          </label>
          <input className="create-input" placeholder="Marry Doe" />
        </div>
        <div className="input-wrapper">
          <label className="label" htmlFor="password">
            Password <span>*</span>
          </label>
          <input className="create-input" placeholder="Marry Doe" />
        </div>
        <div className="input-wrapper">
          <label className="label" htmlFor="company">
            Company name
          </label>
          <input className="create-input" placeholder="Marry Doe" />
        </div>

        <div className="radio">
          <div className="radio-btn-heading">
            <p>
              Are you an agency?<span>*</span>
            </p>
          </div>

          <div className="radio-btn">
            <input
              type="radio"
              id="yes"
              name="yes"
              value="Yes"
              className="radio-btn1"
            />
            <div className="option-yes">Yes</div>
            <input
              type="radio"
              id="no"
              name="no"
              value="No"
              className="radio-btn2"
            />
            <div className="option-no">No</div>
          </div>
        </div>

        <button className="create-btn1">Create Account</button>
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

export default CreateAccount;
