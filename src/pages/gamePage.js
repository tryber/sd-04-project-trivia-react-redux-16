import React, { Component } from 'react';
import Header from '../components/header';
import { fetchTrivia } from '../service';
import Question from '../components/question';

class gamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  componentDidMount() {
    this.setState({ questions: fetchTrivia() });
  }

  render() {
    const { current, questions } = this.state;
    return (
      <div>
        <Header />
        {questions.length < 1 ? <div>Loading...</div> : <Question info={questions[current]} />}
      </div>
    );
  }
}

export default gamePage;
