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

  renderInputs() {
    return (
      <div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            data-testid="input-player-name"
            type="text"
            id="name"
            name="name"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            data-testid="input-gravatar-email"
            type="email"
            id="email"
            name="gravatarEmail"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }

  render() {
    const { name, gravatarEmail, showConfig } = this.state;
    return (
      <div>
        <form id="loginForm" name="form" onSubmit={this.onSubmit}>
          {this.renderInputs()}
          <div>
            <button
              data-testid="btn-play"
              type="submit"
              id="btn"
              disabled={!name || !gravatarEmail}
            >
              Jogar
            </button>
          </div>
        </form>
        <div>
          <button data-testid="btn-settings" type="button" id="btnConf" onClick={this.toggleConfig}>
            Configurações
          </button>
        </div>
        {showConfig && <h1 data-testid="settings-title">Configurações</h1>}
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
