import wind from "../../assets/Sounds/wind-white-noise.mp3";
import underWater from "../../assets/Sounds/underwater-white-noise.mp3";
import forest from "../../assets/Sounds/forest-white-noise.mp3";
import keyboard from "../../assets/Sounds/keyboard-white-noise.mp3";
import fireWhite from "../../assets/Sounds/fire-white-noise.mp3";
import publicPlace from "../../assets/Sounds/public-place-white-noise.mp3";

import AsmrButton from "./AsmrButton";
import { useState } from "react";
import Arrow from "../../assets/Icons/arrow";

const sounds = [
  { text: "wind", src: wind },
  { text: "underWater", src: underWater },
  { text: "forest", src: forest },
  { text: "keyboard", src: keyboard },
  { text: "fireWhite", src: fireWhite },
  { text: "publicPlace", src: publicPlace },
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
    <div className="  h-1/2 w-fit    absolute top-1/2  -translate-y-1/2 right-0   ">
      <div className="relative w-fit  h-full">
        <span
          className="text-slate-50 text-2xl absolute z-10 top-1/2 -translate-y-1/2  -translate-x-full cursor-pointer "
          onClick={expandHandler}
        >
          <Arrow rotate={expand}></Arrow>
        </span>
        <div
          className={`relative transition-all duration-1000 ${panelWidth} overflow-hidden  h-full bg-[#02142000] rounded-l-3xl shadow-black shadow-2xl`}
        >
          <div className="flex flex-col  w-[24rem]  h-full   gap-4 flex-wrap items-center justify-center">
            {sounds.map((sound, index) => {
              return <AsmrButton key={index} sound={sound}></AsmrButton>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsmrPanel;
