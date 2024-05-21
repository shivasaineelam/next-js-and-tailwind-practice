"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      {error.message}
      <div>
        <button onClick={reset} className="bg-zinc-400 ">
          TRY AGAIN
        </button>
      </div>
    </>
  );
}
