import Home from "./pages/Home";
import About from "./pages/About";
import ColorProvider from "./components/ColorProvider";
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    <ColorProvider>
      <Switch>
        <Route path="/" exact component={Home}/>   
        <Route path="/about" component={About}/>
      </Switch>
    </ColorProvider>
    </Router>
  );
}

export default App;
