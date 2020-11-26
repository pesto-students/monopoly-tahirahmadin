import React, { Component } from 'react';
import Game from './Game';
import StartScreen from './StartScreen';

const INITIAL_WALLET_AMOUNT = 1500;
class Monopoly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      players: [],
    };
  }

  handlePlayers = (playersName) => {
    let playersList = [];
    let colors = ['#405DE6', '#E1306C', '#0277bd', '#ff846d'];
    playersName.map((player, index) => {
      if (player !== null) {
        let singlePlayer = {
          name: player,
          amount: INITIAL_WALLET_AMOUNT,
          position: 0,
          properties: [],
          color: colors[index],
        };
        playersList.push(singlePlayer);
      }
    });
    this.setState({ players: playersList, screen: 1 });
  };
  render() {
    return (
      <div>
        {this.state.screen === 0 && <StartScreen handlePlayers={this.handlePlayers} />}
        {this.state.screen === 1 && <Game handleScreen={this.handleScreen} players={this.state.players} />}
      </div>
    );
  }
}
export default Monopoly;
