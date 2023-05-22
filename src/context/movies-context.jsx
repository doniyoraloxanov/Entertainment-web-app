import { createContext, useState } from "react";
import data from "../data.json";

const MoviesContext = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

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
  };

  return (
    <MoviesContext.Provider value={valueToShare}>
      {children}
    </MoviesContext.Provider>
  );
};

export { Provider };
export default MoviesContext;
