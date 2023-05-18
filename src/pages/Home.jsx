import React from "react";
import data from "../data.json";

const Home = () => {
  const filtered = data.filter((movie) => movie.isTrending !== false);

  const renderedTrending = filtered.map((movie, index) => {
    return (
      <div key={index} className="flex flex-col">
        {Object.values(movie.thumbnail.trending).map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
              <img src={item} />;
            </div>
          );
        })}

        <div className="flex space-x-4  text-gray-300">
          <p>{movie.year}</p>
          <p>{movie.category}</p>
          <p>{movie.rating}</p>
        </div>
        <h2 className="text-lg">{movie.title}</h2>
      </div>
    );
  });

  return <div className="text-white mx-auto">{renderedTrending}</div>;
};

export default Home;
