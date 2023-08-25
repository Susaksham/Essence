/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import github from "../../public/github.svg";
// import linkedin from "../../public/linkedin.svg";
import github from "../../assets/Icons/github.svg";
import linkdin from "../../assets/Icons/linkedin.svg";
import twitter from "../../assets/Icons/twitter.svg";
import leftImg from "../../assets/Icons/left-img.png";
import logo from "../../assets/Icons/logo.png";
import classes from "./Home.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/all";
import Button from "../UI/Button";
const Home = ({ showAuthHandler }) => {
  return (
    <div className={classes.container}>
      <div className="logo flex flex-col items-center justify-center pt-[0rem]">
        <img className="w-[2.5rem] h-[2.5rem]" src={logo} alt="" />
        <h1 className="logo-txt text-[#156669] font-[Righteous]  text-[2rem]">
          ESSENCE
        </h1>
      </div>
      <div>
        <Button text="SignUp" onClick={showAuthHandler}></Button>
      </div>
      <div className="hero-content flex justify-around mx-[13rem]">
        <div className="left mt-[0rem]">
          <div className="upper-txt text-[#156669] font-[Lilita+one] font-[700] text-[4rem] leading-[4.5rem]">
            <h1 className="w-[45rem]">
              Say goodbye to neck and back pain with{" "}
            </h1>
          </div>
          <div className="main-txt">
            <h1 className=" h-[22vh] text-[#156669] font-[Lato] ml-[-.5rem] font-[900] text-[13rem] leading-[18rem] ">
              {`ESSENCE's`}{" "}
            </h1>
            <div className="main-side-txt border-[#156669] w-[25rem] h-[5rem] border-b-[.5rem] border-r-[.5rem] ml-[40rem]">
              <h1 className="pl-[7rem] text-[#156669] font-[Lilita+one] font-bold text-[2.2rem]">
                posture alerts.{`"`}
              </h1>
            </div>
          </div>
          <div className="lower-txt">
            <ul className=" text-[#156669] gap-[20rem] font-[Lilita+one] font-[700] text-[3rem] p-3 mt-[2rem]">
              <li className="flex items-center gap-3 leading-[5rem]  ">
                <IoMdCheckmarkCircleOutline className="h-[2rem] w-[2rem]" />{" "}
                Address poor posture while using digital devices.
              </li>
              <li className="flex items-center gap-3 leading-[5rem]">
                <IoMdCheckmarkCircleOutline className="h-[2rem] w-[2rem]" />
                Avoid major issues like {`"sleep apnea" and "slip disc"`} from
                arising.
              </li>
              <li className="flex items-center gap-3 leading-[5rem]">
                <IoMdCheckmarkCircleOutline className="h-[2rem] w-[2rem]" />
                Improve productivity and sleep cycles.
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex flex-col">
          <div className="left-img w-[50rem]">
            <img src={leftImg} alt="" />
          </div>
          <div className="nav-btn-container h-[fit-contained] py-[2rem] px-[2rem] rounded-[20rem]  mt-[1.5rem] ml-[8rem]  ">
            <button className="navbtn ">
              <Link
                className="nav- flex items-center relative overflow-hidden bg-[#080808] h-[] text-[#fff] font-[Lilita+one] font-[600] rounded-[20rem] text-[2rem] p-[3rem] pr-[8rem]"
                to="/dashboard"
              >
                GET STARTED
                <div className={classes[`icon-btn`]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="icon-container m">
        <ul className="icons flex items-center justify-center gap-8">
          <li>
            {" "}
            <a href="">
              <img src={linkdin} alt="" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="">
              <img src={github} alt="" />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="">
              <img src={twitter} alt="" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
