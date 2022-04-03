import React from "react";

export default function HeaderComponent() {
  return (
    <div className="fixed w-full">
      <div className="w-full py-5 px-14">
        <div className="flex flex-row justify-between">
          <div>
            <div className="font-bold italic text-xl border-b-4 border-[#8EA3E5]">
              <span>
                e-coo<span className="text-[#FD794B]">merse</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-20 font-bold my-auto">
            <div>
              <span>HOME</span>
            </div>
            <div>
              <span>CATALOGUE</span>
            </div>
            <div>
              <span>PROMO</span>
            </div>
            <div>
              <span>BLOG</span>
            </div>
            <div>
              <span>CONTACT US</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
