import { createContext, useEffect, useState } from "react";
import data from "../data.json";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const MoviesContext = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState({});
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

  // Auth Firebase

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const valueToShare = {
    getValue,
    title,
    toggleBookmark,
    bookmarks,
    setBookmarks,
    createUser,
    signIn,
    logout,
    user,
  };

  return (
    <MoviesContext.Provider value={valueToShare}>
      {children}
    </MoviesContext.Provider>
  );
};

export { Provider };
export default MoviesContext;
