import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BadScore from '../components/feedback/BadScore'
import GoodScore from '../components/feedback/GoodScore'

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
  }
  PrintScore() {
    if (score > 3) { // pegar o score de alguma props que irei receber
      // ou do state do Reduz ou de um componente que será criado.
      return <GoodScore />
    } else {
      return <BadScore />
    }
  }
  render() {

    return (
      <div className='container'>
        <div className='feedbackText'>
          { this.PrintScore() }
          <TotalScore />
        </div>

      </div>
    )
  }
}

export default FeedbackPage;
