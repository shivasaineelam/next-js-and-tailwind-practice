"use client";

import { useState } from "react";

export default function LoggedInuser() {
  const [isloggedin, setisloggedin] = useState<boolean>(false);
  const handleLogin = () => {
    setisloggedin(true);
  };
  const handleLogout = () => {
    setisloggedin(false);
  };
  return (
    <div>
      <div className="">
        <button
          onClick={handleLogin}
          className="bg-yellow-200 p-4 rounded-lg m-5"
        >
          Login
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="bg-yellow-200 p-4 rounded-lg m-5"
      >
        Logout
      </button>
      <h1>user is {isloggedin ? "loggged in" : "logged out"}</h1>
    </div>
  );
}
