"use client";
import { useState } from "react";

export default function Time() {
  const [timer, setTimer] = useState("0");

  const CurrentTimer = () => {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");
    setTimer(`${hour}:${min}:${sec}`);
  };

  const startTimer = () => {
    setInterval(CurrentTimer, 1000);
  };

  startTimer();

  return (
    <div>
      <h1 className="p-3 text-xl">{timer}</h1>
    </div>
  );
}
