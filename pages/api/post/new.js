import { connectDB } from "@/util/database";

export default async function Handler(request, response) {
  if (request.method == "GET") {
    return response.status(200).json({ name: "안녕 이건 GET으로 들어온거야" });
  }
  if (request.method == "POST") {
    const db = (await connectDB).db("forum");
    if (request.body.title && request.body.content) {
      await db.collection("post").insertOne({
        title: request.body.title,
        content: request.body.content,
      });
      response.redirect(302, "/list");
    } else {
      return response.send(
        `<script>
        alert('please fill title and content');
      </script>`
      );
    }
  }
}
