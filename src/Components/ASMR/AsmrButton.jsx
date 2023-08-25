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
    ? "text-slate-50 text-2xl border-2 w-36 h-36 flex items-center justify-center  px-2 py-2 border-red-700 cursor-pointer"
    : "text-slate-50 text-2xl border-2 w-36 h-36 flex items-center justify-center  px-2 py-2 border-slate-50 cursor-pointer";
  return (
    <div className="w-36">
      <audio ref={audioRef} loop={true}>
        <source src={props.sound.src} type="audio/mpeg" />
        <p className="text-slate-50 z-30 relative text-lg">
          Your browser does not support the audio element.
        </p>
      </audio>
      <div className="flex flex-col items-center">
        <div onClick={handlePlay} className={style}>
          {props.sound.text}
        </div>
        <input
          className="w-36"
          type="range"
          onChange={soundChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default AsmrButton;
