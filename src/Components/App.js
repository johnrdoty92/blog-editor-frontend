//Components
import Header from "./Header";
import ArticleEditor from "./ArticleEditor";
import ArticlesPreview from "./ArticlesPreview";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Hooks
import { useReducer, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { reducer } from "../hooks/reducer.js";

function App() {
  const articles = useFetch("/articles", [
    {
      _id: "loading-articles",
      title: "Loading Title...",
      description: "Loading Description...",
    },
  ]);
  const [articleDetails, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    author: "",
    tags: [],
    HTMLcontent: "",
  });
  const [submitButtonText, setSubmitButtonText] = useState("Upload Article");

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/edit">
              <ArticleEditor
                dispatch={dispatch}
                articleDetails={articleDetails}
                submitButtonText={submitButtonText}
              />
            </Route>
            <Route path="/new">
              <ArticleEditor
                dispatch={dispatch}
                articleDetails={articleDetails}
                submitButtonText={submitButtonText}
              />
            </Route>
            <Route path="/">
              <ArticlesPreview
                dispatch={dispatch}
                articles={articles}
                setSubmitButtonText={setSubmitButtonText}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
