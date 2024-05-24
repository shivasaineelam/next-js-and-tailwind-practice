import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  // const query = request.nextUrl.searchParams.get("query");
  // const filteredComments = query
  //   ? comments.filter((comment) => comment.text.includes(query))
  //   : comments;
  // return Response.json(filteredComments);
  console.log(
    request.cookies.get("theme"),
    request.cookies.get("token"),
    request.cookies.get("radius"),
    request.cookies.get("bearer")
  );
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newcomment);
  return new Response(JSON.stringify(newcomment), {
    headers: {
      "Content-type": "Application/json",
    },
    status: 201,
  });
}
