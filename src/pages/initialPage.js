import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../redux/action';
import { getGravatar } from '../service';

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      gravatarEmail: null,
      showConfig: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleConfig = this.toggleConfig.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { gravatarEmail } = this.state;
    const { onSubmit, history } = this.props;
    onSubmit({ ...this.state, picture: getGravatar(gravatarEmail) });
    history.push('/game');
  }

  toggleConfig() {
    this.setState((state) => ({ showConfig: !state.showConfig }));
  }

  render() {
    const { name, gravatarEmail, showConfig } = this.state;
    return (
      <div>
        <form id="loginForm" name="form" onSubmit={this.onSubmit}>
          <div>
            <label data-testid="input-player-name" htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder=" Nome do jogador" onChange={this.onChange} />
          </div>
          <div>
            <label data-testid="input-gravatar-email" htmlFor="email">Email:</label>
            <input type="email" id="email" name="gravatarEmail" onChange={this.onChange} />
          </div>
          <div>
            <button data-testid="btn-play" type="submit" id="btn" disabled={!name || !gravatarEmail}>
              Jogar
            </button>
          </div>
        </form>
        <div>
          <button data-testid="btn-setting" type="button" id="btnConf" onClick={this.toggleConfig}>
            Configurações
          </button>
        </div>
        {showConfig && <h1 data-testid="setting-title">Configurações</h1>}
      </div>
    );
  }
}

InitialPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (player) => dispatch(updatePlayer(player)),
  };
}

export default connect(null, mapDispatchToProps)(InitialPage);
