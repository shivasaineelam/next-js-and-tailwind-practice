"use client";
import { notFound } from "next/navigation";

export default function reviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) notFound();
  const val = Math.floor(Math.random() * 5);
  if (val === 1 || val === 2) throw new Error("error occured at review id ");
  return (
    <h1>
      review details = product id ={params.productId}, review ID =
      {params.reviewId}
    </h1>
  );
}
