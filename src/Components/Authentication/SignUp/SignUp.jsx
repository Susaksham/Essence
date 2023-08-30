import { useRef, useContext, useState } from "react";
import Button from "../../UI/Button";
import { authCtx } from "../../../store/auth-context";
const SignUp = () => {
  const [register, setRegister] = useState(true);
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const userCtx = useContext(authCtx);
  console.log("token" + userCtx.token);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (register) {
      const userName = userNameRef.current.value;
      userCtx.register({ userName, email, password });
    } else {
      userCtx.login({ email, password });
    }
  };
  console.log(userCtx.userInfo);
  const regStyle = register ? "text-red-500" : "text-slate-50";
  const loginStyle = !register ? "text-red-500" : "text-slate-50";
  return (
    <div className="w-full h-full px-12 py-12 gap-4 bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="flex gap-2   ">
        <div className={`${regStyle} text-3xl border-r-2 px-2  border-r-white`}>
          SignUp
        </div>
        <div className={`${loginStyle} text-3xl`}>Login</div>
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        {register && (
          <div className="flex flex-col gap-1">
            <label className="text-slate-50 text-3xl">Username</label>
            <input
              ref={userNameRef}
              className="text-3xl px-2 py-1"
              type="text"
            ></input>
          </div>
        )}
        <div className="flex flex-col">
          <label className="text-slate-50 text-3xl">Email</label>
          <input
            ref={emailRef}
            type="text"
            className="text-3xl px-2 py-1"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-slate-50 text-3xl">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="text-3xl px-2 py-1"
          ></input>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            onClick={() => {}}
            text={register ? "SignUp" : "Login"}
          ></Button>
        </div>
      </form>
      <p className="text-slate-50 text-2xl">
        Not a member?{" "}
        <button
          onClick={() => {
            setRegister((state) => {
              return !state;
            });
          }}
          className="text-red-600 text-2xl"
        >
          {register ? "Login Now" : "SignUp Now"}
        </button>
      </p>
    </div>
  );
};

export default SignUp;
