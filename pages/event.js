import React, { useState } from "react";
import imgNew from "../public/img.png";
export default function Event() {
  const [state, setState] = useState(JSON.parse(localStorage.getItem("event")));
  let x = {
    event: "Birthday",
    hostedby: "Vinay",
    startsAt: "2022-10-01T19:57",
    endsAt: "2022-10-02",
    location: "Mumbai"
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse px-4 py-10 md:py-2 md:px-40 items-center">
      <div className="w-[70vw] font-semibold text-[#240D57] py-4 sm:p-4">
        <p className="text-3xl mb-4">Event: {state.event}</p>
        <p className="text-xl mb-4">{state.host}</p>
        <p className="text-2xl mb-4">{state.startsAt}</p>
        <p className="text-2xl mb-4">{state.endsAt}</p>
        <p className="text-xl mb-4">{state.location}</p>
      </div>
      <div className="flex justify-center items-center sm:p-16">
        <img src="/img.png" className="" />
      </div>
    </div>
  );
}
