import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {
  WelcomePage,
  QuizPage,
  ResultPage
} from "./index";
import { dataObj } from "../constants/index";

const AppRouter = (props) => {
  const arrayGradesAnsweredQuestion = Array(dataObj.quizQuestionsAmount).fill(0);

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
              <Route path='/quiz' component={()=><QuizPage array = {arrayGradesAnsweredQuestion}/>} />
              <Route path='/result' component={ResultPage} />
          </Switch>
        )
      }}
      </Route>
    </Router>
  )
};

export default AppRouter;