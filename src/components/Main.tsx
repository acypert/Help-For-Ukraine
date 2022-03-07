import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { IBaseProps } from "../domain/IBaseProps";
import WelcomePage from "./WelcomePage";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import SignUp from "./SignUp";
import PortalManagement from "./PortalManagement";
import PostEditView from "./PostEditView";

export default class Main extends React.PureComponent<IBaseProps, undefined> {
  constructor(props: IBaseProps) {
      super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <WelcomePage {...this.props} />
          </Route>
          <Route exact path="/index">
            <WelcomePage {...this.props} />
          </Route>
          <Route exact path="/login">
            <Login {...this.props} />
          </Route>
          <Route exact path="/logout">
            <Logout {...this.props} />
          </Route>
          <Route exact path="/profile">
            <Profile {...this.props} />
          </Route>
          <Route exact path="/signUp">
            <SignUp {...this.props} />
          </Route>
          <Route exact path="/portalManagement">
            <PortalManagement {...this.props} />
          </Route>
          <Route exact path="/post/:postId">
            <PostEditView {...this.props} />
          </Route>
        </Switch>
      </main>
    );
  }
}
