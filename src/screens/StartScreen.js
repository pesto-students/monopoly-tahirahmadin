import React, { Component } from 'react';

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
    };
  }

  handleGameEntry = () => {
    this.props.handleScreen(1);
  };
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
          <h1 className="mb-5">Welcome to Monopoly</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Player 1</label>
            <input
              type="text"
              name="player1"
              class="form-control"
              placeholder="Enter player1 name"
              style={{ width: '30vw' }}
              onChange={(e) => this.props.handlePlayerName(e)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Player 2 </label>
            <input
              type="text"
              name="player2"
              class="form-control"
              placeholder="Enter player2 name"
              style={{ width: '30vw' }}
              onChange={(e) => this.props.handlePlayerName(e)}
            />
          </div>
          <button className="btn btn-secondary" style={{ backgroundColor: '#615cbf' }} onClick={this.handleGameEntry}>
            Enter the game!
          </button>
        </div>
      </div>
    );
  }
}
