"use client";

import { useEffect, useState } from "react";

export default function Tail() {
  const [data, setdata] = useState({ fact: String, length: Number });
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
      <h1>{data.fact}</h1>
      {data.length}
    </>
  );
}
