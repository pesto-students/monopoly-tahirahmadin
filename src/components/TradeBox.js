import React, { Component } from 'react';
const gameBlocks = require('./../data/gameBlocks.json');
class TradeBox extends Component {
  render() {
    return (
      <div>
        <div
          style={{ borderRadius: 10, border: '1px solid #212121', padding: 10, width: '300px' }}
          className="mt-5 shadow">
          <div className="d-flex flex-row justify-content-center">
            <button
              className="btn btn-secondary mr-2 shadow"
              disabled={!this.props.isRolled}
              style={{ backgroundColor: '#C13584', width: '100px' }}
              onClick={() => this.props.handleBuy()}>
              Buy
            </button>
            <button
              className="btn btn-secondary ml-2 shadow"
              disabled={!this.props.isRolled}
              style={{ backgroundColor: '#C13584', width: '100px' }}
              onClick={() => this.props.handlePass()}>
              Pass
            </button>
          </div>
          <div
            className="d-flex justify-content-center my-2"
            style={{ height: '60px', width: '100%', border: '1px solid #212121' }}>
            <div className="mr-1 mt-1">
              {this.props.dice1 === -1 ? 'Roll the dice' : gameBlocks[this.props.dice1 + this.props.dice2].pricetext}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TradeBox;
