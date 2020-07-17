import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {
  InitialPage, GamePage, FeedbackPage,
} from './pages';
import RankingPage from "./pages/rankingPage";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/ranks" component={RankingPage} />
        <Route path="/feedback" component={FeedbackPage} />
      </Switch>
    </div>
  );
}
