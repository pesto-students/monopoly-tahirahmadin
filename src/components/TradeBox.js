import React, { Component } from 'react';

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
        </div>
      </div>
    );
  }
}
export default TradeBox;
