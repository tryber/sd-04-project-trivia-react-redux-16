import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getGravatar } from '../service';
import './header.css';

const Header = ({ gravatarEmail, name, score }) => (
  <header className="header-page">
    <img src={getGravatar(gravatarEmail)} alt="profile" data-testid="header-profile-picture" className="header-img-avatar" />
    <span data-testid="header-player-name" className="header-name-avatar">{name}</span>
    <span data-testid="header-score" className="header-score-avatar">pontos : {score}</span>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player: { gravatarEmail, name, score } }) => ({
  gravatarEmail, name, score,
});

export default connect(mapStateToProps)(Header);
