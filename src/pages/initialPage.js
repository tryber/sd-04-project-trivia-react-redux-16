import React, { Component } from 'react';

export default class initialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name, email } = this.state;
    console.log(name, email);
    return (
      <div>
        <form id="loginForm" name="form" onSubmit={this.onSubmit}>
          <div>
            <label data-testid="input-player-name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" Nome do jogador"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label data-testid="input-gravatar-email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button
              data-testid="btn-play"
              type="submit"
              id="btn"
              disabled={!name || !email}
            >
              Jogar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
