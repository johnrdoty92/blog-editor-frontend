import { useState, useEffect } from "react";

export const useFetchGet = (url) => {
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
        return [
          {
            _id: "error",
            title: "ERROR",
            message: "Something went wrong.",
            description: "Something went wrong.",
          },
        ];
      })
      .then((data) => setResult(data))
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
