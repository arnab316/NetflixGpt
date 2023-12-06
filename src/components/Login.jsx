import Header from "./Header";
import { bgImg } from "../utils/index";
import { useState } from "react";
const Login = () => {
  const [isSingin, setSingin] = useState(true);
  const toggleSingInForm = () => {
    setSingin(!isSingin);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img src={bgImg} alt="logo" />
      </div>
      <form
        action=""
        className="w-3/12 absolute p-12 bg-[#000000] my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingin ? "Sing in" : "Sing up"}
        </h1>
        {!isSingin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#151211] rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#151211] rounded-sm"
        />
        <input
          type="password"
          placeholder="pasword"
          className="p-4 my-2 w-full bg-[#151211] rounded-sm"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-sm">
          {isSingin ? "Sing in" : "Sing up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSingInForm}>
          New to NetFlix? Sing up
        </p>
      </form>
    </div>
  );
};

export default Login;
