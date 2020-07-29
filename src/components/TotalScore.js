import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TotalScore.css';

class TotalScore extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div className="totalScore">
        <h1 data-testid="feedback-total-question" className="totalScore-h1">
          Você acertou
          {` ${assertions} `}
          questões!
        </h1>
        <h2 data-testid="feedback-total-score" className="totalScore-score">
          Um total de
          {` ${score} `}
          pontos
        </h2>
      </div>
    );
  }
}

TotalScore.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(TotalScore);
