export default function Write() {
  return (
    <div className=" bg-slate-200">
      <h4 className="p-3 text-2xl font-extrabold">글 작성하기</h4>
      <div className="p-2 w-min">
        <form action="api/post/new" method="POST" className=" bg-slate-100">
          <h4 className="p-2"> 제목 </h4>
          <input type="text" name="title" className="p-4 mx-2" />
          <h4 className="p-2"> 본문 </h4>
          <input type="text" name="content" className="p-4 mx-2" />
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
