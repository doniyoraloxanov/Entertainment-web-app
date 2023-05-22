import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="relative ">
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="block py-4 pl-12 bg-gray-900 w-full text-gray-300 outline-none text-lg"
          />
          <GoSearch className="text-white text-2xl absolute top-4 left-2" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
