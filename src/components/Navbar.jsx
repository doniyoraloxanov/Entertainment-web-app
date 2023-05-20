import { NavLink, Outlet } from "react-router-dom";
import { ProductIcon } from "../icons/ProductIcon";
import { MdLocalMovies } from "react-icons/md";
import logo from "../user.png";
import { useState } from "react";

const Navbar = () => {
  const [home, setHome] = useState(null);
  const [series, setSeries] = useState(null);
  const [movies, setMovies] = useState(null);
  const [bookmark, setBookmrk] = useState(null);

  return (
    <div>
      <nav className="flex  space-x-20  bg-gray-800 py-6 px-6 items-center   md:justify-between lg:flex-col lg:space-x-0 lg:space-y-16  lg:items-start   lg:max-w-0 lg:pr-16  lg:justify-start   lg:absolute   lg:w-96   lg:pb-96  lg:rounded-3xl  sticky left-0 lg:left-6">
        <div className=" lg:text-start">
          <ProductIcon />
        </div>
        <div className="flex space-x-8 items-center lg:space-x-0 lg:space-y-8 lg:flex-col  ">
          <NavLink
            to="/"
            end
            style={({ isActive }) => {
              return {
                color: isActive ? setHome(true) : setHome(false),
              };
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={` fill-current  hover:text-red-600 text-[#5A698F]   text-${
                home && "white"
              }  `}
            >
              <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
            </svg>
          </NavLink>
          <NavLink
            to="/movies"
            end
            style={({ isActive }) => {
              return {
                color: isActive ? setMovies(true) : setMovies(false),
              };
            }}
          >
            <MdLocalMovies
              className={`text-[#5A698F]  hover:text-red-600  text-4xl text-${
                movies && "white"
              }`}
            />
          </NavLink>
          <NavLink
            to="/series"
            end
            style={({ isActive }) => {
              return {
                color: isActive ? setSeries(true) : setSeries(false),
              };
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={` fill-current  hover:text-red-600 text-[#5A698F]   text-${
                series && "white"
              }  `}
            >
              <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
            </svg>
          </NavLink>
          <NavLink
            to="/bookmark"
            end
            style={({ isActive }) => {
              return {
                color: isActive ? setBookmrk(true) : setBookmrk(false),
              };
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={` fill-current  hover:text-red-600 text-[#5A698F]   text-${
                bookmark && "white"
              }  `}
            >
              <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
            </svg>
          </NavLink>
        </div>
        <div>
          <NavLink to="/register">
            <img src={logo} className="w-25 h-10" />
          </NavLink>
        </div>
      </nav>
      <main className="max-w-4xl lg:px-32 px-10 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;

// g:flex-col, lg:space-x-0, and lg:space-y-4.
