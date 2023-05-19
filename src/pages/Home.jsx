import React, { useState } from "react";
import data from "../data.json";

const Home = () => {
  const filtered = data.filter((movie) => movie.isTrending !== false);
  const [movies, setMovies] = useState(filtered);
  console.log(movies);

  const renderedTrending = movies.map((movie, index) => {
    return (
      <section className="">
        <div key={index} className="relative">
          {console.log(movie)}

          {/* Trending images */}
          <div className="bg-red-500 w-96 h-full ">
            <img
              src={movie.thumbnail.trending.large}
              className="w-full h-full"
            />

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
    <div>
      <p className="text-white  font-medium text-xl mb-4 ">Trending</p>
      <div className=" overflow-x-auto  flex space-x-4 rounded-md md:w-[700px] lg:w-[900px] xl:w-[1400px]">
        {renderedTrending}
      </div>
    </div>
  );
};

export default Home;
