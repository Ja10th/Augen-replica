import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiStarOfDavidThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#0F1012]">
      <div className="pt-20">
        <div className="flex flex-col md:flex-row max-w-md md:max-w-[90rem] justify-between mx-auto">
          <div>
            <p className="text-white text-xl">augen</p>
          </div>
          <div className="flex flex-col md:flex-row gap-40">
            <div className="hidden md:block">
              <p className="text-gray-500">1.0</p>
              <p className="text-white font-light">Pages</p>
              <div className="pt-48">
                <p className="text-gray-500">2.0</p>
                <p className="text-white font-light">Follow</p>
              </div>
            </div>
            <div className="pr-72">
              <div className="flex items-center group cursor-pointer">
                <div className=" px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">A¹ Sense</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">B¹ Eye</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">A¹ Neuro</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">Program</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">Updates</p>
              </div>
              <div className="flex items-center group cursor-pointer pt-20">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">LinkedIn</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="px-1 rounded-2xl border border-[#0F1012] group-hover:border-blue-500 mr-2">
                  <IoIosArrowRoundForward className="text-[#0F1012] group-hover:text-blue-500" />
                </div>
                <p className="text-white text-2xl font-light">X</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-xs md:max-w-[90rem] items-center pt-40 pb-6 justify-between mx-auto">
          <div className="text-gray-200 bg-opacity-95 p-2 rounded-full">
            <PiStarOfDavidThin className="text-6xl" />
          </div>
          <div className="flex text-gray-200 px-10 md:px-0 font-thin text-xs md:text-sm gap-4 pr-24">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
            <div className="pl-48">
              <p>Italy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
