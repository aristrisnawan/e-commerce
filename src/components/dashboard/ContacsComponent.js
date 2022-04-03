import React from "react";
import bg from "../../images/bgDashboard.png";

export default function ContactsComponent() {
  return (
    <div
      className="w-full h-screen bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex">
        <div className="flex flex-row mx-auto laptop:space-x-16">
          <div className="flex flex-col laptop:mt-96">
            <input
              type="text"
              className="border-2 border-[#FD794B] w-80 py-3 px-2 placeholder:text-[#FD794B] focus:outline-none focus:border-[#FD794B] focus:ring-2 focus:ring-[#FD794B]"
              placeholder="What's Your name?"
            />

            <input
              type="email"
              className="border-2 border-[#FD794B] w-80 py-3 px-2 my-5 placeholder:text-[#FD794B] focus:outline-none focus:border-[#FD794B] focus:ring-2 focus:ring-[#FD794B]"
              placeholder="E-mail"
            />

            <div className="mx-auto">
              <button className="font-semibold text-[#FD794B] rounded bg-white py-3 px-16">
                Send
              </button>
            </div>
          </div>
          <div className="laptop:my-80">
            <p className="font-extrabold text-[#FD794B] text-7xl mb-3 ml-16">
              Let's Be
            </p>
            <p className="font-extrabold text-[#8EA3E5] text-7xl">Friends.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
