//Components
import Header from "./Header";
import ArticleEditor from "./ArticleEditor";
import ArticlesPreview from "./ArticlesPreview";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Hooks
import { useReducer, useState, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { reducer } from "../hooks/reducer.js";

export const EditorContext = createContext();

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
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="App">
      <EditorContext.Provider value={isEditMode}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/edit/:id">
                <ArticleEditor
                  dispatch={dispatch}
                  articleDetails={articleDetails}
                />
              </Route>
              <Route path="/new">
                <ArticleEditor
                  dispatch={dispatch}
                  articleDetails={articleDetails}
                />
              </Route>
              <Route path="/">
                <ArticlesPreview dispatch={dispatch} articles={articles} setIsEditMode={setIsEditMode}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </EditorContext.Provider>
    </div>
  );
}

export default App;
