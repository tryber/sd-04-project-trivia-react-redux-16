import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { initialPage, gamePage, rankingPage, feedbackPage } from './pages';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={initialPage} />
        <Route path="/game" component={gamePage} />
        <Route path="/ranks" component={rankingPage} />
        <Route path="/feedback" component={feedbackPage} />
      </Switch>
    </div>
  );
}
