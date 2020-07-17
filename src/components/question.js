import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../redux/action';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: this.randomizedAnswers(),
      timer: 30,
    };
    this.initialize = this.initialize.bind(this);
    this.randomizedAnswers = this.randomizedAnswers.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.info.question !== this.props.info.question) {
      this.setState({ allAnswers: this.randomizedAnswers(), resolve: null, timer: 30 });
      this.initialize()
    }
  }

  onClick(resolve) {
    this.setState({ resolve });
    clearInterval(this.timerInterval);
    clearTimeout(this.timerTimeout);
    if (resolve === "correct") {
    }
  }

  initialize() {
    this.timerInterval = setInterval(() => {
      this.setState(({ timer }) => ({ timer: timer - 1 }));
    }, 1000);
    this.timerTimeout = setTimeout(() => {
      clearInterval(this.timerInterval);
      this.onClick('time out');
    }, 30000);
  }

  randomizedAnswers() {
    const {
      info: {
        correct_answer: correct,
        incorrect_answers: incorrects,
      },
    } = this.props;
    const allAnswers = incorrects.map((ans, i) => ({
      text: ans, btn: 'wrong', id: `wrong-answer-${i}`, value: Math.random(),
    }));
    allAnswers.push({
      text: correct, btn: 'correct', id: 'correct-answer', value: Math.random(),
    });
    return allAnswers.sort((a, b) => a.value - b.value);
  }

  render() {
    const { info: { category, question }, onNext } = this.props;
    const {
      allAnswers, timer, resolve,
    } = this.state;
    return (
      <div>
        <span data-testid="question-category">{category}</span>
        <span>{timer}</span>
        <p data-test-id="question-text">{question}</p>
        {allAnswers.map(({ id, text, btn }) => (
          <button
            data-testid={id}
            key={id}
            type="button"
            className={resolve ? btn : null}
            disabled={resolve}
            onClick={() => this.onClick(btn)}
          >
            {text}
          </button>
        ))}
        {resolve && <h3>{resolve}</h3>}
        {resolve && <button type="button" data-testid="btn-next" onClick={onNext}>Próxima</button>}
      </div>
    );
  }
}

Question.propTypes = {
  info: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => ({
  updatePlayer: (player) => dispatch(updatePlayer(player));
});

export default connect(null, mapDispatchToProps)(Question);
