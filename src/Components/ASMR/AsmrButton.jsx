/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
const AsmrButton = (props) => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay((state) => {
      return !state;
    });
  };

  const soundChangeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };
  useEffect(() => {
    if (play) {
      setPlay(true);
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  const style = play
    ? "text-slate-50 text-2xl border-4 w-36 h-36 flex items-center justify-center  px-2 py-2 border-[#fff] cursor-pointer  border  bg-[#156669] px-4 py-2 rounded-[50%] "
    : "text-slate-50 text-2xl  w-36 h-36 flex items-center justify-center  px-2 py-2 border-slate-50 cursor-pointer  bg-[#021420] px-4 py-2 rounded-[50%] bgs";
  return (
    <div className="w-16 rounded-[50%]">
      <audio ref={audioRef} loop={true}>
        <source src={props.sound.src} type="audio/mpeg" />
        <p className="text-slate-50 z-30 relative text-lg">
          Your browser does not support the audio element.
        </p>
      </audio>
      <div className="flex flex-col items-center rounded-[50%]  ">
        <div onClick={handlePlay} className={style}>
          <img
            className="h-[4rem] w-[4rem]"
            key={props.sound.id}
            src={props.sound.img}
            type="icon/png"
            alt="no img"
          />
          {/* <source className="h-[5rem] w-[5rem]" src={props.sound.img} type="image/png" alt="no img" /> */}
        </div>
        <input
          className="w-36 text-[black]"
          type="range"
          onChange={soundChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default AsmrButton;
