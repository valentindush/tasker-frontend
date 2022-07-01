import React from "react";
import Chart from "../../components/chart";
export default function Overview() {
  return (
    <div className="h-full">
      <div className="flex mt-2 gap-2">
        <div className="stats w-[60%] bg-white p-3 font-semibold text-gray-700 rounded-xl h-[38vh]">
          <div className="header flex justify-between">
            <div className="txt">
              <h2 className="">
                Your statistics{" "}
                <span className="font-medium text-sm ml-2 text-[#0075FF]">
                  +12.82%
                </span>{" "}
              </h2>
            </div>
            <div className="btns font-normal flex gap-2 scale-90">
              <button className="p-1 px-5 rounded-lg inline-block  text-sm bg-black text-white">
                Month
              </button>
              <button className="p-1 px-5 rounded-lg inline-block  text-sm bg-white border-2 border-gray-500 text-black">
                Year
              </button>
            </div>
          </div>

          <div className="chart">
            {/* chart here*/}
            <Chart />
          </div>
        </div>
        <div className="progress w-[40%] bg-white p-2 rounded-xl h-[38vh]"></div>
      </div>
      <div className="w-full bg-white mt-2 h-[54%] p-2 rounded-xl"></div>
    </div>
  );
}
