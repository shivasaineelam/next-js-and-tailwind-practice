export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // console.log(
  //   request.cookies.get("token"),
  //   request.cookies.get("theme"),
  //   request.cookies.get("bearer"),
  //   request.cookies.get("radius"),
  //   request.cookies.get("name")
  // );
  const json = {
    name: "shiva sai neelam",
    time: new Date().toLocaleTimeString(),
  };
  return Response.json(json);
}
