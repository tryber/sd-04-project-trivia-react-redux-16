import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TotalScore from '../components/TotalScore';
import Header from '../components/header';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.PrintScore = this.PrintScore.bind(this);
  }

  PrintScore() {
    if (this.props.score > 3) {
      return <div data-testid='feedback-text'>Podia ser melhor...</div>;
    }
    return <div data-testid='feedback-text'>Podia ser melhor...</div>;
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="feedbackText">
          {this.PrintScore()}
          <TotalScore score={score} assertions={assertions} />
          <Link to='/game' data-testid='btn-play-again' >Jogar novamente</Link>
          <Link to='/ranks' data-testid='ranking-title' >Ver Ranking</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,

});

export default connect(mapStateToProps)(FeedbackPage);
