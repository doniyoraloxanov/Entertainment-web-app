import React from "react";
import data from "../data.json";
import PlayButton from "../components/PlayButton";

const Series = () => {
  const filteredSeries = data.filter(
    (series) => series.category === "TV Series"
  );

  const renderedSeries = filteredSeries.map((series, index) => {
    return (
      <section key={index} className="group">
        <div className="relative">
          <img
            src={series.thumbnail.regular.small}
            className=" w-full h-full rounded-lg group-hover:opacity-40"
          />

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
                  <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
                </svg>
              </span>
              <p>{series.category}</p>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <p>{series.rating}</p>
          </div>
          <p className="text-white mt-1 md:mt-2">{series.title}</p>
        </div>
      </section>
    );
  });

  return (
    <div>
      <h2 className="text-white text-2xl mb-8">TV Series</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:w-[950px] xl:w-[1400px]  ">
        {renderedSeries}
      </div>
    </div>
  );
};

export default Series;
