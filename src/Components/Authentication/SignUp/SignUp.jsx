import { useRef } from "react";
import Button from "../../UI/Button";
const SignUp = () => {
  const userName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-full px-12 py-12 bg-black flex items-center justify-center rounded-lg">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-slate-50 text-3xl">Username</label>
          <input
            ref={userName}
            className="text-3xl px-2 py-1"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-slate-50 text-3xl">Email</label>
          <input ref={email} type="text" className="text-3xl px-2 py-1"></input>
        </div>
        <div className="flex flex-col">
          <label className="text-slate-50 text-3xl">Username</label>
          <input
            ref={password}
            type="text"
            className="text-3xl px-2 py-1"
          ></input>
        </div>

        <Button onClick={() => {}} text="SignUp"></Button>
      </form>
    </div>
  );
};

export default SignUp;
