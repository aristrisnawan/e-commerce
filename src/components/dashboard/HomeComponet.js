import React from "react";
import fb from "../../images/fb.png";
import google from "../../images/google.png";
import github from "../../images/github.png";
import cart1 from "../../images/cart1.png";

export default function HomeComponet() {
  return (
    <div className="w-full h-screen bg-[#E5E3E4] flex px-96 space-x-7">
      <div className="flex flex-row my-auto">
        <div className="flex flex-col">
          <div className="">
            <p className="text-[#8EA3E5] text-5xl font-bold">Bring back</p>
            <p className="text-[#FD794B] text-5xl font-bold mt-3 absolute">
              shopping culture.
            </p>
          </div>

          <div className="flex flex-row space-x-10 mt-20">
            <div className="my-auto">
              <span className="text-[#8EA3E5] text-lg font-semibold">
                go to
              </span>
            </div>
            <div>
              <button className="text-[#FD794B] font-semibold text-lg px-5 py-2 bg-white rounded-full">
                catalogue
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row mt-7 space-x-7">
              <div className="w-32 h-1 bg-white my-auto"></div>
              <div>
                <span className="text-[#8EA3E5] text-lg font-semibold">or</span>
              </div>
              <div className="w-32 h-1 bg-white my-auto"></div>
            </div>
            <div className="flex flex-row mt-3 mx-16 space-x-7">
              <img src={fb} alt="facebook" />
              <img src={google} alt="google" />
              <img src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>

      <div className="laptop:mt-7">
        <img src={cart1} alt="cart" />
      </div>
    </div>
  );
}
