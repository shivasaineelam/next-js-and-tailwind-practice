import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (!comment) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (index === -1)
    return new Response(
      JSON.stringify({
        error: "Error updating the message",
        description: "Index not present",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      }
    );

  comments[index].text = text;

  return new Response(JSON.stringify(comments[index]), {
    headers: {
      ContentType: "Application/json",
    },
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (index === -1)
    return new Response(
      JSON.stringify({
        error: "Error updating the message",
        description: "Index not present",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      }
    );
  comments.splice(index, 1);
  const json = { message: "succesfully deleted the message" };
  return new Response(JSON.stringify(json), {
    headers: {
      ContentType: "Application/json",
    },
    status: 202,
  });
}
