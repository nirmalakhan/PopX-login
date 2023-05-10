import React from "react";
import { useState } from "react";
import AccountSetting from "./pages/AccountSettingPage";
import CreateAccount from "./pages/CreateAccountPage";
import SignInPage from "./pages/SignInPage";
import WelcomePage from "./pages/WelcomePage";

function App({ onPrevious, onNext }) {
  const [currentPage, setCurrentPage] = useState(0);
  // const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    onNext();
   
  };

  const handlePrevious = () => {
    onPrevious();
    
  };

  const pages = [
    <WelcomePage
      onPrevious={() => setCurrentPage(3)}
      onNext={() => setCurrentPage(1)}
      
    />,
    <SignInPage
      onPrevious={() => setCurrentPage(0)}
      onNext={() => {
        setCurrentPage(2);
      }}
      
    />,
    <CreateAccount
      onPrevious={() => setCurrentPage(1)}
      onNext={() => {
        setCurrentPage(3);
      }}
      
    />,
    <AccountSetting
      onPrevious={() => setCurrentPage(2)}
      onNext={() => {
        setCurrentPage(0);
      }}
      
    />,
  ];
  return <div className="App">{pages[currentPage]}</div>;
}

export default App;
