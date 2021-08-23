import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContainer from "./components/UsersContainer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  const [userProfile, setUserProfile] = useState({});
  const setProfile = (profile) => {
    setUserProfile(profile);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user-profile">
            <UserProfile profile={userProfile} />
          </Route>
          <Route exact path="/">
            <UserContainer setProfile={setProfile} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
