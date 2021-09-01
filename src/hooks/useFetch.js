import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [result, setResult] = useState([
    //Initial Value
    {
      _id: "loading-articles",
      title: "Loading Title...",
      description: "Loading Description...",
    },
  ]);

  useEffect(() => {
    console.log("Fetch Request Made");
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
