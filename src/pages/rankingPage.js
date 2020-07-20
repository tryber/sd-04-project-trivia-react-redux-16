import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { resetPlayer } from '../redux/action';

class RankingPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { ranking } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ul>
          {ranking
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <li key={player.name} >
                <img src={player.image} alt={`player-picture-${index}`} />
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

const mapStateToProps = ({ ranking }) => ({
  ranking,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(resetPlayer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
