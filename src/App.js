import "./App.css";
import Header from "./Header";
import ChatScreen from "./ChatScreen";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

import Chats from "./Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* put something outside the router 
      if you want to display it on all pages */}
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          {/* Default route as the bottom */}
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
