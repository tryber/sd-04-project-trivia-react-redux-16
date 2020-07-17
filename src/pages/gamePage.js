import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import { fetchTrivia } from '../service';
import Question from '../components/question';
import '../styles/gamePage.css';

class gamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    fetchTrivia().then(({ results: questions }) => this.setState({ questions }));
  }

  nextQuestion() {
    this.setState(({ current }) => ({ current: current + 1 }));
  }

  render() {
    const { current, questions } = this.state;
    if (current > 4) return <Redirect to="/feedback" />;
    return (
      <div>
        <Header />
        {questions && questions.length > 0
          ? <Question info={questions[current]} onNext={this.nextQuestion} />
          : <div>Loading...</div>}
      </div>
    );
  }
}

export default gamePage;
