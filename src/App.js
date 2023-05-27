import { useState } from "react";
import originalData from "./data.json";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import HomePage from "./pages/HomePage";
import BookMarkPage from "./pages/BookMarkPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="series" element={<SeriesPage />} />
      <Route
        path="bookmark"
        element={
          <ProtectedRoute>
            <BookMarkPage />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen  max-w-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
