import React from "react";

export default function FooterComponent() {
  return (
    <div className="w-full bg-[#FD794B]">
      <div className="flex flex-row laptop:py-16 laptop:px-14 laptop:space-x-64">
        <div className="flex flex-row text-white laptop:space-x-40">
          <div className="laptop:text-lg">
            <p className="mb-3">Blog</p>
            <p>Contact Us</p>
          </div>
          <div className="laptop:text-lg">
            <p className="mb-3">Catalog</p>
            <p>FAQ</p>
          </div>
          <div className="laptop:text-lg">
            <p className="mb-3">Promo</p>
            <p>About Us</p>
          </div>
        </div>
        <div className="my-auto">
          <p className="text-white italic laptop:text-3xl laptop:font-bold">
            e-coo<span className="text-[#3B5998]">merse</span>
          </p>
        </div>
      </div>
    </div>
  );
}
