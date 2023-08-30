import wind from "../../assets/Sounds/wind-white-noise.mp3";
import underWater from "../../assets/Sounds/underwater-white-noise.mp3";
import forest from "../../assets/Sounds/forest-white-noise.mp3";
import keyboard from "../../assets/Sounds/keyboard-white-noise.mp3";
import fireWhite from "../../assets/Sounds/fire-white-noise.mp3";
import publicPlace from "../../assets/Sounds/public-place-white-noise.mp3";
import windIcon from "../../assets/Icons/icons8-wind-100.png";
import arrowIcon from "../../assets/Icons/icons8-arrow-100.png";


import AsmrButton from "./AsmrButton";
import { useState } from "react";

const sounds = [
  { id: "01",img: windIcon, src: wind },
  { id: "02",img: windIcon, src: underWater },
  { id: "03",img: windIcon, src: forest },
  { id: "04",img: windIcon, src: keyboard },
  { id: "05",img: windIcon, src: fireWhite },
  { id: "06",img: windIcon, src: publicPlace },
];
const AsmrPanel = () => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((state) => {
      return !state;
    });
  };
  const panelWidth = expand ? "w-fit" : "w-[11rem]";
  return (
    <div className="  h-1/2 w-fit bgs2     absolute top-1/2  -translate-y-1/2 right-0   ">
      <div className="relative w-fit  h-full">
        <span
          className="text-slate-50 text-2xl absolute z-10 top-1/2 -translate-y-1/2  -translate-x-full cursor-pointer "
          onClick={expandHandler}
        >
          <img className="h-[] w-[5rem]" src={arrowIcon} alt="" />
        </span>
        <div
          className={`relative transition-all duration-1000 ${panelWidth} overflow-hidden  h-full bg-[#02142000] rounded-l-3xl shadow-black shadow-2xl`}
        >
          <div className="flex flex-col  w-[24rem] h-full  gap-4 flex-wrap items-center justify-center">
            {sounds.map((sound, index) => {
              return <AsmrButton key={index} sound={sound} ></AsmrButton>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsmrPanel;
