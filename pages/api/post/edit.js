import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(request, response) {
  if (request.method == "POST") {
    let update = { title: request.body.title, content: request.body.content };
    const db = (await connectDB).db("forum");
    await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body.id) }, { $set: update });
    response.redirect(302, `/detail/${request.body.id}`);
  }
}
