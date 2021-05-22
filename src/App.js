import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ArticlesList from "./pages/ArticlesList.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/get-all-articles" component={ArticlesList} />
        <Route path="/get-each-article" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
