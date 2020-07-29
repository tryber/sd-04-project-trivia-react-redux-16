import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPlayer } from '../redux/action';
import './rankingPage.css';

class RankingPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { ranking } = this.props;
    return (
      <div className="rankingPage">
        <h1 data-testid="ranking-title">Ranking</h1>
        <ul className="rankingPage-ul-list">
          {ranking
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <li key={player.name} className="rankingPage-list">
                <img src={player.picture} alt={`player-${index}`} className="rankingPage-img" />
                <div data-testid={`player-name-${index}`} className="rankingPage-name"> {player.name}</div>
                <div data-testid={`player-score-${index}`} className="ranking-score">{`${player.score} pontos`}</div>
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

RankingPage.propTypes = {
  onMount: PropTypes.func.isRequired,
  ranking: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ ranking }) => ({
  ranking,
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(resetPlayer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
