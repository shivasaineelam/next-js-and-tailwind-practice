import Link from "next/link";

export default function notifications() {
  return (
    <>
      <h1> default notifications</h1>
      <Link
        className="underline border-blue-300"
        href="/complex-dashboard/archived"
      >
        archived
      </Link>
    </>
  );
}
