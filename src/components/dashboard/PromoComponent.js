import React from "react";
import samsung from "../../images/samsung.png";

export default function PromoComponent() {
  const data = [
    {
      id: 1,
      img: samsung,
      nama: "Samsung Galaxy S22",
      ram: "12GB / 8GB",
      haragaNormal: 21999000,
      hargaDiscount: 17999000,
    },
    {
      id: 2,
      img: samsung,
      nama: "Samsung Galaxy S22",
      ram: "12GB / 8GB",
      haragaNormal: 21999000,
      hargaDiscount: 17999000,
    },
    {
      id: 3,
      img: samsung,
      nama: "Samsung Galaxy S22",
      ram: "12GB / 8GB",
      haragaNormal: 21999000,
      hargaDiscount: 17999000,
    },
    {
      id: 4,
      img: samsung,
      nama: "Samsung Galaxy S22",
      ram: "12GB / 8GB",
      haragaNormal: 21999000,
      hargaDiscount: 17999000,
    },
  ];
  return (
    <div className="w-full h-screen bg-white laptop:px-28">
      <div>
        <p className="text-4xl font-bold pt-28 pb-5">
          promo <span className="text-[#FD794B]">today.</span>
        </p>
        <div className="grid laptop:grid-cols-4 laptop:gap-x-10 laptop:gap-y-5">
          {data.map((hp) => {
            return (
              <div
                className="flex flex-col border-2 border-[#8EA3E5] justify-beetween rounded hover:scale-105 hover:border-[#F4B400] cursor-pointer"
                key={hp.id}
              >
                <div className="mx-auto py-2">
                  <img src={hp.img} alt="" className="w-32" />
                </div>
                <div className="mx-auto text-center py-3">
                  <p className="font-semibold text-lg">{hp.nama}</p>
                  <p className="font-semibold">{hp.ram}</p>
                </div>
                <div className="mx-auto text-center py-3">
                  <p>{hp.haragaNormal}</p>
                  <p className="font-semibold text-lg">{hp.hargaDiscount}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex">
          <button className="text-[#FD794B] bg-white py-3 px-9 border-2 border-[#8EA3E5] rounded-full font-semibold laptop:text-xl laptop:mx-auto">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
