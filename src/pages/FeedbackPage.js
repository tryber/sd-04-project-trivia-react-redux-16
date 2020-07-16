import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import BadScore from '../components/feedback/BadScore';
import GoodScore from '../components/feedback/GoodScore';
import TotalScore from '../components/feedback/TotalScore';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.PrintScore = this.PrintScore.bind(this);
  }

  PrintScore() {
    if (this.props.score > 3) { // pegar o score de alguma props que irei receber
      // ou do state do Reduz ou de um componente que será criado.
      return <GoodScore />;
    }
    return <BadScore />;
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div className="container">
        <div className="feedbackText">
          {this.PrintScore()}
          <TotalScore score={score} assertions={assertions} />
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
