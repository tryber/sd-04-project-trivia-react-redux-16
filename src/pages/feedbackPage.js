import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalScore from '../components/TotalScore';
import Header from '../components/header';
import { updateRanking } from '../redux/action';
import './feedbackPage.css';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.PrintScore = this.PrintScore.bind(this);
  }

  componentDidMount() {
    const {
      onMount, name, score, picture,
    } = this.props;
    onMount({ name, score, picture });
  }

  PrintScore() {
    const { assertions } = this.props;
    if (assertions < 3) {
      return (
        <div className="feedback-msg1">
          <h3>Podia ser melhor...</h3>
        </div>
      );
    }
    return (
      <div className="feedback-msg2">
        Mandou bem!
      </div>
    );
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div className="feedback">
        <Header />
        <div className="feedback-">
          <div data-testid="feedback-text">{this.PrintScore()}</div>
          <TotalScore score={score} assertions={assertions} />
          <Link to="/" data-testid="btn-play-again" className="feedback-button-play-again">Jogar novamente</Link>
          <Link to="/ranks" data-testid="btn-ranking " className="feedback-button-ranking">Ver Ranking</Link>
        </div>
      </div>
    );
  }
}

FeedbackPage.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  player: {
    score, assertions, name, picture,
  },
}) => ({
  score,
  assertions,
  name,
  picture,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: (newPlayer) => dispatch(updateRanking(newPlayer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);
