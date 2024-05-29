"use client";

import { useState } from "react";
type authUser = {
  name: string;
  email: string;
};

export default function LoggedInuser() {
  const [user, setuser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setuser({ name: "shivasai", email: "neelamshivasai93479@gmail.com" });
  };
  const handleLogout = () => {
    setuser(null);
  };

  return (
    <div>
      <div>
        <button className="bg-red-100 p-4 rounded-2xl" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div>
        <button className="bg-blue-600 p-4 rounded-3xl" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1> my name is -{user?.name}</h1>
      <h1> my email id is -{user?.email}</h1>
    </div>
  );
}
