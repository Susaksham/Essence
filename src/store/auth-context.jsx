/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { createContext, useState } from "react";

export const authCtx = createContext({
  token: "",
  userInfo: {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({
    userName: "saksham",
    email: "",
  });

  const register = async (info) => {
    const { userName, email, password } = info;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
      import.meta.env.VITE_SOME_API_TOKEN
    }`;

    /* registering User */

    try {
      console.log(url);

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: "true",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.error.message);
      }

      const data = await response.json();
      console.log(data);
      toast.success("Registered Successfully", { className: "text-3xl" });
      setUserInfo({ userName, email: "" });
    } catch (err) {
      console.log("error: " + err);
      toast.error(`${err}`, { className: "text-3xl" });
      return;
    }
  };
  const login = async (info) => {
    const { email, password } = info;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
      import.meta.env.VITE_SOME_API_TOKEN
    }`;

    /* Login  */

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: "true",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.error.message);
      }

      const data = await response.json();
      toast.success("Registered Successfully", { className: "text-3xl" });
      setToken(data.idToken);
      setUserInfo((state) => {
        return { ...state, email };
      });
    } catch (err) {
      console.log("error: " + err);
      toast.error(`${err}`, { className: "text-3xl" });
      return;
    }
  };
  const logout = () => {
    setToken("");
    setUserInfo({ userName: "", email: "" });
  };

  const storeObj = {
    token,
    userInfo,
    login,
    logout,
    register,
  };
  return <authCtx.Provider value={storeObj}>{children}</authCtx.Provider>;
};

export default AuthContextProvider;
