import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalScore extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div data-testid="feedback-total-question">
        <h1>
          Você acertou
          {assertions}
          {' '}
          questões!
        </h1>
        <div>
          Um total de
          {score}
          {' '}
          pontos
        </div>
      </div>
    );
  }
}

TotalScore.propTypes = {
  assertions: PropTypes.isRequired,
  score: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(TotalScore);
