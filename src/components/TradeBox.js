import React, { Component } from 'react';
const gameBlocks = require('./../data/gameBlocks.json');
class TradeBox extends Component {
  render() {
    return (
      <div>
        <div style={{ borderRadius: 10, border: '1px solid #212121', padding: 10, width: '300px' }} className="mt-5">
          <div className="d-flex flex-row justify-content-center">
            <button className="btn btn-secondary mr-2" style={{ backgroundColor: '#615cbf', width: '100px' }}>
              Buy
            </button>
            <button className="btn btn-secondary ml-2" style={{ backgroundColor: '#615cbf', width: '100px' }}>
              Stats
            </button>
          </div>
          <div
            className="d-flex justify-content-center my-2"
            style={{ height: '60px', width: '100%', border: '1px solid #212121' }}>
            <div className="mr-1 mt-1">{gameBlocks[this.props.dice1 + this.props.dice2].pricetext}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TradeBox;
