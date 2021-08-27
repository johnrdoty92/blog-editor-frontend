export const submitContent = (content) => {
  console.log(JSON.stringify({ content: content }));
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: content }),
  };
  fetch("/", requestOptions).then((response) => response.json());
};

export const getArticle = async (id) => {
  //Fetch the article with the id in the url
  const article = await fetch(`/articles/${id}`);
  const json = await article.json();
  return json;
};
//Use the JSON response to update the fields
//Make a patch requst with the new data
