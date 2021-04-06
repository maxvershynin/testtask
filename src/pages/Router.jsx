import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {
  WelcomePage,
  QuizPage,
  ResultPage
} from "./index";


const AppRouter = (props) => {
  return (
    <Router>
      <Route>{({ location, history }) => {
        const url = location.pathname.match(/([^*/]+)/g);
        let controller = null;

        if (url) {
            [controller] = url;
        }
        return (
          <Switch>
              <Redirect from='/' exact to={'/welcome'} />
              <Route path='/welcome' component={WelcomePage} />
              <Route path='/quiz' component={QuizPage} />
              <Route path='/result' component={ResultPage} />
          </Switch>
        )
      }}
      </Route>
    </Router>
  )
};

export default AppRouter;