import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    //creating two way binding
    e.preventDefault(); // preventing from reloading
    handleLogin(email,password)
    // console.log("Email is", email);
    // console.log("Password is", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none px-7 py-2 border-2 border-emerald-600 text-xl rounded-full bg-transparent placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none px-7 py-2 border-2 border-emerald-600 text-xl rounded-full bg-transparent mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button
            input
            className="text-white outline-none  px-7 py-2   text-xl rounded-full bg-emerald-600 mt-6 "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
