import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="p-2 bg-slate-200">
      <h4 className="p-3 text-2xl font-extrabold">상세 페이지</h4>
      <div className="p-2 bg-white w-36">
        <h4 className="p-2"> {result.title} </h4>

        <h4 className="p-2">{result.content} </h4>

        <div className="flex justify-end p-2">
          <Link
            href={`/edit/${props.params.id}`}
            className="p-2 text-white rounded-md bg-slate-800"
          >
            수정하기
          </Link>
        </div>
      </div>
    </div>
  );
}
