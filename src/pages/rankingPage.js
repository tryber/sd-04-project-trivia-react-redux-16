import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class RankingPage extends Component {

  render() {
    // const ranking = JSON.parse(localStorage.getIten('ranking'))
    const ranking = [
      { name: "primeirapessoa", score: 10, picture: "urldafoto" },
      { name: "segundapessoa", score: 30, picture: "urldafoto" },
      { name: "terceirapessoa", score: 20, picture: "urldafoto" },
      { name: "quartapessoa", score: 25, picture: "urldafoto" },
      { name: "quintapessoa", score: 50, picture: "urldafoto" }
    ]
    return (
      <div>
        <ul>
          {ranking
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <li key={player.name} >
                <div data-testid={`player-picture-${index}`}>{player.picture}</div>
                <div data-testid={`player-name-${index}`}>{player.name}</div>
                <div data-testid={`player-score-${index}`}>{player.score}</div>
              </li>
            ))}
        </ul>
        <button data-testid="btn-go-home">
          <Link to="/">Voltar ao Início</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(RankingPage)
