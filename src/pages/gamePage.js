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
        {questions && questions.length > 0
          ? <Question info={questions[current]} />
          : <div>Loading...</div>}
      </div>
    );
  }
}

export default gamePage;
