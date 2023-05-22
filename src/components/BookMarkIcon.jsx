import { GoBookmark } from "react-icons/go";

import React from "react";

const BookMarkIcon = ({ onClick }) => {
  return (
    <div className="absolute top-4 right-4 bg-gray-500  p-2 rounded-full cursor-pointer ">
      <GoBookmark
        className=" text-2xl  text-white hover:text-red-500 "
        onClick={onClick}
      />
    </div>
  );
};

export default BookMarkIcon;
