import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setResult(json))
      .catch((err) => {
        console.error("Fetch Error: ", err);
        setResult([
          {
            _id: "error-no-articles",
            title: "ERROR",
            description: "Could not connect to database",
          },
        ]);
      });
  }, [url]);
  return result;
};
