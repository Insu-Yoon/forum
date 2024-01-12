"use client";
import Link from "next/link";

export default function listItem(props) {
  let data = JSON.parse(props.result);
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {data.map((data) => {
        return (
          <div
            className="flex justify-between w-full p-5 transition-all bg-white rounded-lg shadow-sm shadow-slate-500 test"
            key={data._id}
          >
            <Link href={`/detail/${data._id}`} className="w-2/3">
              <div className="">
                <h4 className="m-0 text-xl font-extrabold ">{data.title}</h4>
                <p className="mx-0 my-1 text-gray-500 ">{data.content}</p>
              </div>
            </Link>
            <span
              className="self-center"
              onClick={() => {
                fetch("api/post/delete", {
                  method: "DELETE",
                  body: data._id,
                });
              }}
            >
              삭제하기
            </span>
          </div>
        );
      })}
    </div>
  );
}
