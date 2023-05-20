import React from "react";
import { GoPlay } from "react-icons/go";

const PlayButton = () => {
  return (
    <div>
      <div className="absolute  top-[30%] left-[20%]  lg:left-[30%]  bg-gray-500 rounded-full px-4 py-2 hidden group-hover:block ">
        <div className="flex items-center space-x-4">
          <GoPlay className=" text-white text-3xl  " />
          <p className="text-white font-medium text-lg">Play</p>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
