import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className=" bg-slate-200">
      <h4 className="p-3 text-2xl font-extrabold">글 수정하기</h4>
      <div className="p-2 w-min">
        <form action="/api/post/edit" method="POST" className=" bg-slate-100">
          <h4 className="p-2"> 제목 </h4>
          <input
            type="text"
            name="title"
            defaultValue={result.title}
            className="p-4 mx-2"
          />
          <h4 className="p-2"> 본문 </h4>
          <input
            type="text"
            name="content"
            defaultValue={result.content}
            className="p-4 mx-2"
          />
          <input
            className="hidden "
            type="text"
            name="id"
            defaultValue={props.params.id}
          />
          <br />
          <div className="flex justify-end p-2">
            <button
              type="submit"
              className="p-2 text-white rounded-md bg-slate-800"
            >
              작성 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
