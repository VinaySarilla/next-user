import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import imgNew from "../public/img.png";
export default function Create() {
  const router = useRouter();
  const handleEventSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    console.log(formData, e.target);
    console.log(formData.get("event"), e.target);
    console.log(formData.get("host"), e.target);
    console.log(formData.get("startsAt"), e.target);
    console.log(formData.get("endsAt"), e.target);
    console.log(formData.get("location"), e.target);
    console.log(formData, e.target);

    let x = {
      event: formData.get("event"),
      host: formData.get("host"),
      startsAt: formData.get("startsAt"),
      endsAt: formData.get("endsAt"),
      location: formData.get("location")
    };

    localStorage.setItem("event", JSON.stringify(x));
    router.push("/event");
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row px-4 py-10 md:py-2 md:px-40 items-center">
      <div className="w-[70vw] font-semibold text-[#240D57] py-4 sm:p-4">
        <p className="text-3xl mb-4">Create New Event</p>
        <form className="flex flex-col gap-3 w-full" onSubmit={(e) => handleEventSubmit(e)}>
          <div className="flex flex-col gap-3">
            <label>🎉 My event is called</label>
            <input
              type="text"
              name="event"
              className="p-3 bg-zinc-200 w-full h-16 rounded-md outline-none hover:bg-fuchsia-200"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>🎉 Hosted By</label>
            <input
              type="text"
              name="host"
              className="p-3 bg-zinc-200 w-full h-16 rounded-md outline-none hover:bg-fuchsia-200"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>🗓 It starts at</label>
            <input
              type="datetime-local"
              name="startsAt"
              className="p-3 bg-zinc-200 w-full h-16 rounded-md outline-none hover:bg-fuchsia-200"
              placeholder="Starts At"
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            <label>🏁 It ends at (optional)</label>
            <input
              type="date"
              name="endsAt"
              className="p-3 bg-zinc-200 w-full h-16 rounded-md outline-none hover:bg-fuchsia-200"
            />
          </div>{" "}
          <div className="flex flex-col gap-3">
            <label>📍 It’s happening at (optional)</label>
            <input
              type="text"
              name="location"
              className="p-3 bg-zinc-200 w-full h-16 rounded-md outline-none hover:bg-fuchsia-200"
            />
          </div>
          <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#8456EC] rounded-lg font-semibold text-white bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
                style={{ background: "linearGradient(90deg, #8456EC 3.25%, #E87BF8 100%)" }}
              >
                🎉 Create my event
              </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center sm:p-16">
        <img src="/img.png" className="" />
      </div>
    </div>
  );
}
