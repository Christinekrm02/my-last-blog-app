import { BrowserRouter as Router, Route } from "react-router-dom";
//import Header from "./components/Header";
import HomePage from "./pages/Homepage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ArticlesListPage from "./pages/ArticlesListPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/get-all-articles" component={ArticlesListPage} />
        <Route path="/get-each-article/:slug" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
