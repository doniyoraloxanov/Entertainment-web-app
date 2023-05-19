import { useState } from "react";
import originalData from "./data.json";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import BookMark from "./pages/BookMark";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="series" element={<Series />} />
      <Route path="bookmark" element={<BookMark />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="bg-gray-900 h-screen   ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
