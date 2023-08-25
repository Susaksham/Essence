import wind from "../../assets/Sounds/wind-white-noise.mp3";
import underWater from "../../assets/Sounds/underwater-white-noise.mp3";
import forest from "../../assets/Sounds/forest-white-noise.mp3";
import keyboard from "../../assets/Sounds/keyboard-white-noise.mp3";
import fireWhite from "../../assets/Sounds/fire-white-noise.mp3";
import publicPlace from "../../assets/Sounds/public-place-white-noise.mp3";

import AsmrButton from "./AsmrButton";
import { useState } from "react";

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

  return (
    <div className="  h-1/2   absolute top-1/2  -translate-y-1/2 right-0 ">
      <div className="relative  h-full bg-green-300">
        <div
          className="text-slate-50 text-2xl absolute top-1/2 -translate-y-1/2 -left-4 cursor-pointer "
          onClick={expandHandler}
        >
          {"<--"}
        </div>
        <div className="flex flex-col w-[24rem]  h-full   gap-4 flex-wrap items-center justify-center">
          {sounds.map((sound, index) => {
            return <AsmrButton key={index} sound={sound}></AsmrButton>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AsmrPanel;
