import React, { Component } from 'react';
import Game from './Game';
import StartScreen from './StartScreen';

class Monopoly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      player1: 'P1',
      player2: 'P2',
    };
  }

  handleScreen = (value) => {
    this.setState({ screen: value });
  };
  handlePlayerName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        {this.state.screen === 0 && (
          <StartScreen
            handleScreen={this.handleScreen}
            screen={this.state.screen}
            handlePlayerName={this.handlePlayerName}
          />
        )}
        {this.state.screen === 1 && (
          <Game handleScreen={this.handleScreen} player1={this.state.player1} player2={this.state.player2} />
        )}
      </div>
    );
  }
}
export default Monopoly;
