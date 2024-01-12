import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(request, response) {
  if (request.method == "DELETE") {
    const db = (await connectDB).db("forum");
    await db.collection("post").deleteOne({ _id: new ObjectId(request.body) });
    response.redirect(302, "/list");
  }
}
