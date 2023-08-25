import AuthModel from "../Components/Authentication/AuthModel/AuthModel";
import Home from "../Components/Home/Home";
import { useState } from "react";
const HomePage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const showAuthHandler = () => {
    setShowAuth((state) => {
      return !state;
    });
  };
  return (
    <div>
      <Home showAuthHandler={showAuthHandler}></Home>
      {showAuth && <AuthModel showAuthHandler={showAuthHandler}></AuthModel>}
    </div>
  );
};

export default HomePage;
