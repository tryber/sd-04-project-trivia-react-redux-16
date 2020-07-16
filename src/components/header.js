import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const Header = ({ picture, name, score }) => (
  <header>
    <img src={picture} alt="profile" data-testid="header-profile-picture" />
    <span>{name}</span>
    <span>{score}</span>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player: { picture, name, score } }) => ({
  picture, name, score,
});

export default connect(mapStateToProps)(Header);
