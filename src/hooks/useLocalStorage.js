import React, { useEffect, useState } from "react";

export const useLocaleStorage = (key, defaultValue = null) => {
  const [val, setValue] = useState(() => {
    return localStorage.getItem(key) ?? defaultValue;
  });

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item !== val) {
      localStorage.setItem(key, val);
    }
  }, [val]);

  return [val, setValue];
};
