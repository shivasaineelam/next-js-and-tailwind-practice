"use client";
import { useRouter } from "next/navigation";
export default function Orderproduct() {
  const router = useRouter();
  const handleClick = () => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <>
      <h1>order here</h1>
      <button onClick={handleClick}>submit</button>
    </>
  );
}
