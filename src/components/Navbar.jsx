import { Link, NavLink, Outlet } from "react-router-dom";
import { ProductIcon } from "../icons/ProductIcon";
import { MdLocalMovies } from "react-icons/md";
import logo from "../user.png";
import { useState } from "react";
import useMovies from "../hooks/use-movies";
import { useNavigate } from "react-router-dom";
import { useLocaleStorage } from "../hooks/useLocalStorage";
import ProtectedRoute from "../pages/ProtectedRoute";

const Navbar = () => {
  const [home, setHome] = useState(null);
  const [series, setSeries] = useState(null);
  const [movies, setMovies] = useState(null);
  const [bookmark, setBookmrk] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useLocaleStorage(
    "isAuth",
    false
  );
  const { user, logout } = useMovies();
  const navigate = useNavigate();
  const handleModalClick = () => {
    setShowModel(!showModel);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="pt-6">
      <nav className="flex items-center justify-between bg-gray-800 px-4 py-2  lg:absolute  lg:flex-col  lg:left-4  lg:space-y-12  ">
        <div className="">
          <ProductIcon />
        </div>
        <div className="flex items-center space-x-6 lg:flex-col lg:items-center lg:space-x-0   lg:space-y-6">
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

          <ProtectedRoute>
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
          </ProtectedRoute>
        </div>

        <div className=" lg:pt-[500px] relative" onClick={handleModalClick}>
          <NavLink>
            <img src={logo} className="w-25 h-10" />
          </NavLink>

          {showModel && (
            <div className="bg-gray-800 w-48 flex flex-col space-y-4 text-center py-2 px-5 rounded-lg absolute right-4 top-16 z-50 lg:left-20 lg:top-80">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white font-semibold py-1 cursor-pointer hover:bg-white hover:text-gray-600 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col space-y-4">
                  <NavLink
                    to="login"
                    onClick={(event) => {
                      // event.preventDefault();
                      setIsAuthenticated(true);
                    }}
                  >
                    <p className="bg-red-500 text-white font-semibold py-1 cursor-pointer hover:bg-white hover:text-gray-600 rounded-lg ">
                      Login
                    </p>
                  </NavLink>
                  <NavLink to="signup">
                    <p className="bg-red-500 text-white font-semibold py-1 cursor-pointer hover:bg-white hover:text-gray-600 rounded-lg">
                      Sign up
                    </p>
                  </NavLink>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      <main className="lg:px-32 px-10 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
