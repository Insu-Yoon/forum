"use client";
import { useState } from "react";

export default function GetTime(request, response) {
  const now = new Date();
  return response.status(200).json(now);
}
//   const [timer, setTimer] = useState("0");

//   const CurrentTimer = () => {
//     const date = new Date();
//     const hour = date.getHours().toString().padStart(2, "0");
//     const min = date.getMinutes().toString().padStart(2, "0");
//     const sec = date.getSeconds().toString().padStart(2, "0");
//     setTimer(`${hour}:${min}:${sec}`);
//   };

//   CurrentTimer();
//   let arr = [];
//   arr.push(timer);
//   const startTimer = () => {
//     setInterval(CurrentTimer, 1000);
//   };

//   startTimer();

//   return (
//     <div>
//       <h1 className="p-3 text-xl">{time}</h1>
//     </div>
//   );
// }
