import { createContext, useState } from "react";

const MoviesContext = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");

  const getValue = (newTitle) => {
    setTitle(newTitle);
  };

  const valueToShare = {
    getValue,
    title,
  };

  return (
    <MoviesContext.Provider value={valueToShare}>
      {children}
    </MoviesContext.Provider>
  );
};

export { Provider };
export default MoviesContext;
