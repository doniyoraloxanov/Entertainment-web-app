import React, { useState } from "react";
import data from "../data.json";
import PlayButton from "../components/PlayButton";

const Home = () => {
  const filtered = data.filter((movie) => movie.isTrending !== false);

  const renderedTrending = filtered.map((movie, index) => {
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

  return (
    <div className="pt-16">
      <h2 className="text-white  text-2xl mb-4 ">Trending</h2>
      <div className=" overflow-x-auto  flex space-x-4 rounded-md md:w-[800px] lg:w-[900px] xl:w-[1400px] mb-4">
        {renderedTrending}
      </div>
      <h2 className="text-white text-2xl ">Recommended for you</h2>
    </div>
  );
};

export default Home;
