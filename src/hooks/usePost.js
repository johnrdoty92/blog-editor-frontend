import React, { useState, useEffect } from "react";

export const usePost = (url, initialValue, options) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);

  return result;
};
