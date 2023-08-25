import { useRef, useState } from "react";
import Timer from "../Timer/Timer";
import noVideo from "../../assets/Icons/icons8-no-video-96.png";
import showVideo from "../../assets/Icons/icons8-video-call-90.png";
const Input = () => {
  const hoursRef = useRef(0);
  const minutesRef = useRef(0);
  const hours = useRef(0);
  const minutes = useRef(0);

  const [timerVisibility, setTimerVisibility] = useState(false);
  const [camra, setCamra] = useState(true);

  const startTimer = () => {
    setTimerVisibility(true);
  };

  const endTimer = () => {
    return new Promise((res) => {
      setTimerVisibility(() => {
        res();
        return false;
      });
    });
  };
  const camraHandler = () => {
    setCamra((state) => {
      return !state;
    });
  };
  const cancelHandler = () => {
    setTimerVisibility(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    hours.current = hoursRef.current.value;
    minutes.current = minutesRef.current.value;
    if (hours > 24) {
      alert("Please enter the hours less than or equal to 24 hours");
      return;
    } else if (minutes >= 60) {
      alert("Please enter the valid minutes");
      return;
    }
    endTimer().then(() => {
      startTimer();
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {!timerVisibility && (
        <form
          className="flex flex-col items-center gap-8"
          onSubmit={submitHandler}
        >
          <div className="flex gap-3">
            <input ref={hoursRef} className="text-3xl py-4 rounded-lg"></input>
            <input
              ref={minutesRef}
              className="text-3xl py-4 rounded-lg"
            ></input>
          </div>
          <div>
            <button className="text-slate-50 text-4xl border border-[#156669] bg-[#156669] px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      )}

      {timerVisibility && (
        <Timer
          endTimer={endTimer}
          hour={hours.current}
          minute={minutes.current}
          camra={camra}
        ></Timer>
      )}
      {timerVisibility && (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={cancelHandler}
            className="text-slate-50 text-4xl border border-[#156669] bg-[#156669] px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <div
          onClick={camraHandler}
          className="text-slate-50 text-4xl border border-[#156669] bg-[#156669] px-4 py-2 rounded-lg"
        >
          <img className={`h-16`} src={camra ? showVideo : noVideo}></img>
        </div>
      </div>
    </div>
  );
};

export default Input;
