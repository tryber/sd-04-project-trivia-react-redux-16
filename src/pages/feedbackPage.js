import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalScore from '../components/TotalScore';
import Header from '../components/header';
import { updateRanking } from '../redux/action';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.PrintScore = this.PrintScore.bind(this);
  }

  componentDidMount() {
    const { onMount, name, score, picture } = this.props;
    onMount({ name, score, picture });
  }

  PrintScore() {
    const { assertions } = this.props;
    if (assertions < 3) {
      return 'Podia ser melhor...';
    }
    return 'Mandou bem!';
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="feedbackText">
          <div data-testid="feedback-text">{this.PrintScore()}</div>
          <TotalScore score={score} assertions={assertions} />
          <Link to="/" data-testid="btn-play-again">Jogar novamente</Link>
          <Link to="/ranks" data-testid="btn-ranking">Ver Ranking</Link>
        </div>
      </div>
    );
  }
}

FeedbackPage.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player: { score, assertions, name, picture } }) => ({
  score,
  assertions,
  name,
  picture,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: (newPlayer) => dispatch(updateRanking(newPlayer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);
