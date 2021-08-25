export const submitContent = (content) => {
    console.log(JSON.stringify({ content: content }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    };
    fetch("/", requestOptions).then((response) => response.json());
  };