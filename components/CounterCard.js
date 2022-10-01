import React from "react";
import LiveSvg from "../public/svg/Live.svg";
export default function CounterCard() {
  return (
    <div className="flex font-inter items-center">
      <div className="text-orange-500 bg-orange-50 p-2 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
      </div>
      <div className="flex flex-col items-start gap-0 font-inter justify-start">
        <p className="text-base font-bold text-zinc-400">Agent Waiting</p>
        <p className="text-2xl font-bold">25</p>
      </div>
    </div>
  );
}
