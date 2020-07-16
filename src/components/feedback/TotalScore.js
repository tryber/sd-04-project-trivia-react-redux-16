// O placar final deve ser mostrado em um elemento com o 
// atributo data-testid com o valor feedback-total-score

// O número de perguntas que a pessoa acertou deve ser exibido
// em um elemento com o atributo data-testid com o valor 
// feedback-total-question

import React, { Component } from 'react';

class TotalScore extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div data-testid='feedback-total-question'>
        <h1>Você acertou 2 questões!</h1>
        <div>Um total de 20 pontos</div>
      </div>
    )
  }
}

export default TotalScore;