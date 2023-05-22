import React, { useState } from "react";
import data from "../data.json";
import PlayButton from "../components/PlayButton";
import { useContext } from "react";
import MoviesContext from "../context/movies-context";

const Home = () => {
  const { title } = useContext(MoviesContext);

  const filteredTrending = data.filter((movie) => movie.isTrending === true);
  const filteredRecommends = data.filter((rec) => rec.isTrending === false);

  const result = filteredRecommends.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );

  const renderedTrending = filteredTrending.map((movie, index) => {
    return (
      <section key={index}>
        <div className="relative">
          {/* Trending images */}
          <div className=" w-96 h-full  group">
            <img
              src={movie.thumbnail.trending.large}
              className="w-full h-full  group-hover:opacity-40"
            />

            <PlayButton />

            {/* Content */}
            <article className="absolute left-4 bottom-4">
              <div className="flex space-x-4  text-gray-300">
                <p>{movie.year}</p>
                <p>{movie.category}</p>
                <p>{movie.rating}</p>
              </div>
              <h2 className="text-xl font-semibold  text-white">
                {movie.title}
              </h2>
            </article>
          </div>
        </div>
      </section>
    );
  });

  const renderedRecommends = result.map((rec, index) => {
    return (
      <section key={index} className="group">
        <div className="relative">
          <img
            src={rec.thumbnail.regular.large}
            className=" w-full h-full rounded-lg group-hover:opacity-40"
          />

          <PlayButton />
          <div className="flex space-x-2 pt-4 text-gray-300 text-sm items-center ">
            <p>{rec.year}</p>

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
              <p>{rec.category}</p>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <p>{rec.rating}</p>
          </div>
          <p className="text-white md:text-lg">{rec.title}</p>
        </div>
      </section>
    );
  });

  return (
    <div className="pt-8">
      <h2 className="text-white  text-2xl mb-6 ">Trending</h2>
      <div className=" overflow-x-auto  flex space-x-4 rounded-md md:w-[800px] lg:w-[900px] xl:w-[1400px] mb-4">
        {renderedTrending}
      </div>
      <h2 className="text-white text-2xl mb-4 ">Recommended for you</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:w-[950px] xl:w-[1400px]  ">
        {renderedRecommends}
      </div>
    </div>
  );
};

export default Home;
