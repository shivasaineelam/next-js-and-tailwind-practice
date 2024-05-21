import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="gh">hello Home page</h1>
      <Link href="/blog">BLOG</Link>
      <br></br>
      <Link href="/about">About</Link>
      <br></br>
      <Link href="/products">Products</Link>
    </div>
  );
}
