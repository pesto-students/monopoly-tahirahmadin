import React, { Component } from 'react';
import Dices from './Dices';

class DiceRoller extends Component {
  render() {
    return (
      <div style={{ borderRadius: 10, border: '1px solid #212121', padding: 10 }} className="mt-5 m-2 shadow">
        <div
          className="d-flex justify-content-center my-1"
          style={{ height: '60px', width: '100%', border: '1px solid #212121' }}>
          <div className="mr-1 mt-1">
            <Dices dice={this.props.dice1} />
          </div>
          <div className="ml-1 mt-1">
            {' '}
            <Dices dice={this.props.dice2} />
          </div>
        </div>
        <button
          className="btn btn-secondary shadow"
          disabled={this.props.isRolled}
          style={{ backgroundColor: '#833AB4', width: '100px' }}
          onClick={this.props.handleRollDice}>
          Roll dice
        </button>
      </div>
    );
  }
}
export default DiceRoller;
