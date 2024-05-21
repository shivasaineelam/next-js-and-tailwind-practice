"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-password", href: "/forgot-password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setinput] = useState("");
  const pathname = usePathname();

  return (
    <html lang="en">
      <input
        className="border-4 border-current"
        placeholder="enter your text here"
        onChange={(e) => {
          console.log(e.target.value);
          setinput(e.target.value);
        }}
      ></input>
      {navLinks.map((link) => (
        <h1 key={link.name}>
          <Link
            href={link.href}
            className={
              pathname === link.href ? "font-bold mr-4" : "text-blue-500 mr-4"
            }
          >
            {link.name}{" "}
          </Link>
        </h1>
      ))}
      <body>{children}</body>
    </html>
  );
}
