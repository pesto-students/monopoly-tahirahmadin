import React, { Component } from 'react';

const INITIAL_WALLET_AMOUNT = 1500;

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersCount: 2,
      player1: null,
      player2: null,
      player3: null,
      player4: null,
    };
  }

  handleGameEntry = () => {
    let playersName = [this.state.player1, this.state.player2, this.state.player3, this.state.player4];
    this.props.handlePlayers(playersName);
  };

  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
          <h1 className="mb-5 text-center">Welcome to Monopoly</h1>
          <select class="custom-select" onChange={(e) => this.setState({ playersCount: e.target.value })}>
            <option selected>Choose players</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {[...Array(2)].map((e, i) => (
            <div class="form-group mt-2">
              <label for="exampleInputEmail1" style={{ color: 'white' }}>
                Player {i + 1}
              </label>
              <input
                type="text"
                name={`player${i + 1}`}
                class="form-control"
                placeholder={`Enter player ${i + 1} name`}
                style={{ width: '30vw' }}
                onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
              />
            </div>
          ))}

          <button className="btn btn-secondary" style={{ backgroundColor: '#615cbf' }} onClick={this.handleGameEntry}>
            Enter the game!
          </button>
        </div>
      </div>
    );
  }
}
