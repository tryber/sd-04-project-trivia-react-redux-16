import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getGravatar } from '../service';

const Header = ({ gravatarEmail, name, score }) => (
  <header>
    <img src={getGravatar(gravatarEmail)} alt="profile" data-testid="header-profile-picture" />
    <span data-testid="header-player-name">{name}</span>
    <span data-testid="header-score">{score}</span>
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
