import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* put something outside the router 
      if you want to display it on all pages */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          {/* Default route as the bottom */}
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
