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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new TypeError("Server failed to respond with JSON");
      })
      .then((json) => setResult(json))
      .catch((err) => {
        setResult([
          {
            _id: "error",
            title: err.name,
            description: err.message,
          },
        ]);
      });
  }, [url]);
  return result;
};
