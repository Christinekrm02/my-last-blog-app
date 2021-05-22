import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "./components/Header";
import HomePage from "./pages/Homepage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ArticlesListPage from "./pages/ArticlesListPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Error404 from "./pages/Error404.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/get-all-articles" component={ArticlesListPage} />
          <Route path="/get-each-article/:slug" component={ArticlePage} />
          {/* routes with no path always match by default */}
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
