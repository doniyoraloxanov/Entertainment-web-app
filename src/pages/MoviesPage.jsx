import React from "react";
import data from "../data.json";
import PlayButton from "../components/PlayButton";

const Movies = () => {
  const filteredMovies = data.filter((movie) => movie.category === "Movie");

  const renderedMovies = filteredMovies.map((movie, index) => {
    return (
      <section key={index} className="group">
        <div className="relative">
          <img
            src={movie.thumbnail.regular.large}
            className=" w-full h-full rounded-lg group-hover:opacity-40"
          />

          <PlayButton />
          <div className="flex space-x-2 pt-4 text-gray-300 text-sm items-center ">
            <p>{movie.year}</p>

            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-current text-gray-300"
                >
                  <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                </svg>
              </span>
              <p>{movie.category}</p>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <p>{movie.rating}</p>
          </div>
          <p className="text-white md:text-lg">{movie.title}</p>
        </div>
      </section>
    );
  });
  return (
    <div className="text-white pt-8  pb-12 ">
      <p className="text-3xl font-medium mb-8">Movies</p>
      <div className=" grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4  lg:w-[950px] xl:w-[1400px]  ">
        {renderedMovies}
      </div>
    </div>
  );
};

export default Movies;
