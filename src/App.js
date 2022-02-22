import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile } from "react-device-detect";
import GettingStarted from "./screens/GettingStarted";
import Consent from "./screens/Consent";
import SignUp from "./screens/SignUp";
import Helplines from "./screens/Helplines";
import Onboard from "./screens/Onboard";
import Questionaire from "./screens/Questionaire";
import SignIn from "./screens/SignIn";
import ContactUs from "./screens/ContactUs";
import PrivacyPolicy from "./screens/PrivacyPolicy";

export const App = ()=> {
  if (isMobile) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={GettingStarted}></Route>
          <Route exact path="/consent" component={Consent}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route exact path="/helplines" component={Helplines}></Route>
          <Route exact path="/onboard" component={Onboard}></Route>
          <Route exact path="/questionaire" component={Questionaire}></Route>
          <Route exact path="/signIn" component={SignIn}></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route exact path="/privacy" component={PrivacyPolicy}></Route>
        </Switch>
      </Router>
    );
  }
  return <div></div>;
}

export default App;
