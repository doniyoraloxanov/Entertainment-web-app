import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import MoviesContext from "../context/movies-context";

const SearchBar = () => {
  const { getValue } = useContext(MoviesContext);
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getValue(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative ">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Search for movies or TV series"
            className="block py-4 pl-12 bg-gray-900 w-full text-gray-300 outline-none text-lg"
          />
          <GoSearch className="text-white text-2xl absolute top-4 left-2" />
        </div>
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
};

export default SearchBar;
