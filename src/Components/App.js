//Components
import Header from "./Header";
import ArticleEditor from "./ArticleEditor";
import ArticlesPreview from "./ArticlesPreview";
import Modal from "react-modal";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Hooks
import { useReducer, useState } from "react";
import { reducer } from "../hooks/reducer.js";
import ConfirmationModal from "./ConfirmationModal";

Modal.setAppElement("#root");

function App() {
  const [articleDetails, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    author: "",
    tags: [],
    HTMLcontent: "",
  });
  const [fetchResponse, setFetchResponse] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <ConfirmationModal
        fetchResponse={fetchResponse}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path={["/edit/:id", "/new"]}>
              <ArticleEditor
                dispatch={dispatch}
                articleDetails={articleDetails}
                setFetchResponse={setFetchResponse}
                setModalIsOpen={setModalIsOpen}
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
