"use client";

import { useEffect, useState } from "react";

export default function Tail() {
  const [data, setdata] = useState({ fact: "", length: 0 });
  const fetchdata = async () => {
    const value = await fetch("https://catfact.ninja/fact");
    const json = await value.json();
    setdata({ fact: json.fact, length: json.length });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <h1 className="text-8xl font-bold ">{data?.fact}</h1>
      {data.length}
    </>
  );
}
