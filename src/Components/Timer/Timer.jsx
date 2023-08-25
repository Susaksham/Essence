/* eslint-disable react/prop-types */
import { useEffect, useReducer, useRef } from "react";
import TensorFlow from "../TensorFlow/TensorFlow";

const timeReducer = (state, action) => {
  if (action.type === "changed") {
    return {
      hours: Math.floor((state.totalTime - 1) / (60 * 60)),
      minutes: Math.floor((state.totalTime - 1) / 60) % 60,
      seconds: (state.totalTime - 1) % 60,
      totalTime: state.totalTime - 1,
    };
  }
};

const Timer = ({ hour, minute, endTimer, camra }) => {
  const [time, dispatch] = useReducer(timeReducer, {
    hours: hour,
    minutes: minute,
    seconds: 0,
    totalTime: hour * 60 * 60 + minute * 60,
  });
  const totalTimeRef = useRef(hour * 60 * 60 + minute * 60);
  const counter = () => {
    dispatch({
      type: "changed",
    });
  };
  useEffect(() => {
    let interval = setInterval(() => {
      totalTimeRef.current = totalTimeRef.current - 1;
      if (totalTimeRef.current === 0) {
        console.log(time.totalTime);
        clearInterval(interval);
        endTimer();
      }
      counter();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-slate-50 flex items-center flex-col justify-center">
      <div className="text-6xl flex items-center justify-center">
        <span>{time.hours < 10 ? `0${time.hours}` : `${time.hours}`}:</span>
        <span>
          {time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`}:
        </span>
        <span>
          {time.seconds < 10 ? `0${time.seconds}` : `${time.seconds}`}
        </span>
      </div>
      {camra && <TensorFlow></TensorFlow>}
    </div>
  );
};

export default Timer;
