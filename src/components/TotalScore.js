import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalScore extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <h1 data-testid="feedback-total-question">
          Você acertou
          {` ${assertions} `}
          questões!
        </h1>
        <div data-testid="feedback-total-score">
          Um total de
          {` ${score} `}
          pontos
        </div>
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
