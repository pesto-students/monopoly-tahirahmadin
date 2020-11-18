import React, { Component } from 'react';

import Dices from './Dices';

class DiceRoller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1,
      dice1: 0,
      dice2: 0,
    };
  }

  handleRollDice = () => {
    const dice1 = Math.floor(Math.random() * Math.floor(5)) + 1;
    const dice2 = Math.floor(Math.random() * Math.floor(5)) + 1;
    this.setState({ dice1, dice2 });
  };

  render() {
    return (
      <div style={{ borderRadius: 10, border: '1px solid #212121', padding: 10 }} className="mt-5 m-2">
        <div
          className="d-flex justify-content-center my-2"
          style={{ height: '60px', width: '100%', border: '1px solid #212121' }}>
          <div className="mr-1 mt-1">
            <Dices dice={this.state.dice1} />
          </div>
          <div className="ml-1 mt-1">
            {' '}
            <Dices dice={this.state.dice2} />
          </div>
        </div>
        <button
          className="btn btn-secondary"
          style={{ backgroundColor: '#615cbf', width: '100px' }}
          onClick={this.handleRollDice}>
          Roll dice
        </button>
      </div>
    );
  }
}
export default DiceRoller;
