import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadScore from '../components/feedback/BadScore'
import GoodScore from '../components/feedback/GoodScore'

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='feedbackText'>
          <GoodScore />
          <TotalScore />
        </div>
      </div>
    )
  }
}