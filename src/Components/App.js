//Components
import Header from "./Header";
import ArticleEditor from "./ArticleEditor";
import ArticlesPreview from "./ArticlesPreview";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Hooks
import { useReducer } from "react";
import { reducer } from "../hooks/reducer.js";

function App() {
  const [articleDetails, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    author: "",
    tags: [],
    HTMLcontent: "",
  });

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path={["/edit/:id", "/new"]}>
              <ArticleEditor
                dispatch={dispatch}
                articleDetails={articleDetails}
              />
            </Route>
            <Route path="/">
              <ArticlesPreview dispatch={dispatch} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
