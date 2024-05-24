import { NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  const json = { name: "shivasai", Age: 21 };
  const headerlist = headers();
  const theme = request.cookies.get("theme");
  const radius = request.cookies.get("radius");
  console.log(
    theme,
    radius,
    request.cookies.get("token"),
    request.cookies.get("bearer")
  );
  // console.log(headerlist.get("Authorization"));
  //   const requestHeader = new Headers(request.headers);
  //   console.log(requestHeader.get("Authorization"));
  return new Response(JSON.stringify(json), {
    headers: {
      "Content-type": "Application/json",
      "Set-Cookie": "theme=red,radius=12,token=12342132,bearer=1234",
    },
    status: 200,
  });
}
