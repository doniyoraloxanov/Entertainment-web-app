import { createContext, useEffect, useState } from "react";
import data from "../data.json";

const MoviesContext = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");
  const bookmarksArray = JSON.parse(localStorage.getItem("bookmarks"));
  const [bookmarks, setBookmarks] = useState(bookmarksArray);

  // Use useEffect to save bookmarks to localStorage when they change
  useEffect(() => {
    // Stringify the bookmarks array
    const bookmarkString = JSON.stringify(bookmarks);
    // Save it to localStorage with the key "bookmarks"
    localStorage.setItem("bookmarks", bookmarkString);
  }, [bookmarks]);

  const toggleBookmark = (title) => {
    // Check if the movie or series is already bookmarked

    const isBookmarked = bookmarks.some((bookmark) => bookmark.title === title);
    if (isBookmarked) {
      // Remove it from the bookmark list
      const newBookmarks = bookmarks.filter(
        (bookmark) => bookmark.title !== title
      );
      setBookmarks(newBookmarks);
    } else {
      // Add it to the bookmark
      const movieOrSeries = data.find((item) => item.title === title);
      const newBookmarks = [...bookmarks, movieOrSeries];
      setBookmarks(newBookmarks);
    }
  };

  const getValue = (newTitle) => {
    setTitle(newTitle);
  };

  const valueToShare = {
    getValue,
    title,
    toggleBookmark,
    bookmarks,
    setBookmarks,
  };

  return (
    <MoviesContext.Provider value={valueToShare}>
      {children}
    </MoviesContext.Provider>
  );
};

export { Provider };
export default MoviesContext;
