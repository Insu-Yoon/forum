import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./listItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <div className="p-2.5 bg-slate-50 flex flex-wrap justify-start">
        <Link
          href={"../write"}
          className="p-2 text-white rounded-md bg-slate-500"
        >
          작성하기
        </Link>
      </div>
      <ListItem result={JSON.stringify(result)} />
    </div>
  );
}
