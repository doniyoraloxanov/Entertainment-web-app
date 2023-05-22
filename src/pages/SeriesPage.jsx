import React from "react";
import data from "../data.json";
import PlayButton from "../components/PlayButton";
import useMovies from "../hooks/use-movies";
import { GoBookmark } from "react-icons/go";

const Series = () => {
  const { title, toggleBookmark } = useMovies();

  const filteredSeries = data.filter((series) => series.category === "Movie");

  const result = filteredSeries.filter((series) =>
    series.title.toLowerCase().includes(title.toLowerCase())
  );

  const renderedSeries = result.map((series, index) => {
    return (
      <section key={index} className="group">
        <div className="relative">
          <img
            src={series.thumbnail.regular.large}
            className=" w-full h-full rounded-lg group-hover:opacity-40"
          />
          <div className="absolute top-4 right-4 bg-gray-500  p-2 rounded-full cursor-pointer ">
            <GoBookmark
              className=" text-2xl  text-white hover:text-red-500 "
              onClick={() => toggleBookmark(series.title)}
            />
          </div>

          <PlayButton />
          <div className="flex space-x-2 pt-4 text-gray-300 text-sm items-center ">
            <p>{series.year}</p>

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
              <p>{series.category}</p>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <p>{series.rating}</p>
          </div>
          <p className="text-white md:text-lg">{series.title}</p>
        </div>
      </section>
    );
  });

  return (
    <div>
      <h2 className="text-white text-2xl mb-8 mt-4">TV Series</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:w-[950px] xl:w-[1400px]  ">
        {renderedSeries}
      </div>
    </div>
  );
};

export default Series;
