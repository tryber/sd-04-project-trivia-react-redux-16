import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalScore extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <h1>
          Você acertou <span data-testid="feedback-total-question">{assertions}</span> questões!
        </h1>
        <div>
          Um total de <span data-testid="feedback-total-score">{score}</span> pontos
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
