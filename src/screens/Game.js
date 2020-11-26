import React from 'react';
import { useState, useEffect } from 'react';
import Blocks from '../components/Blocks';
import CardsAsset from '../components/Cards/CardsAsset';
import DiceRoller from '../components/Dice/DiceRoller';
import HoverCard from '../components/HoverCard';
import LandedCard from '../components/LandedCard';
import TradeBox from '../components/TradeBox';
import TurnIndicator from '../components/TurnIndicator';
const gameBlocks = require('./../data/gameBlocks.json');

function Game(props) {
  const [isRolled, setIsRolled] = useState(false);

  const [dice1, setDice1] = useState(-1);
  const [dice2, setDice2] = useState(-1);
  const [spot1, setSpot1] = useState(0);
  const [spot2, setSpot2] = useState(0);
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);

  const [diceCount, setDiceCount] = useState(0);
  const [turnOf, setTurnOf] = useState(0);

  let styles = {
    turn: {
      border: '1px solid #212121',
      borderRadius: 4,
      padding: 4,
      margin: 5,
    },
    notTurn: {
      margin: 5,
      padding: 4,
    },
  };
  const checkTurn = () => {
    return diceCount % 2 === 0;
  };
  function handleMousePosition(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }
  function blockCreator(element, index) {
    return (
      <div className="smallContainer">
        <p className="text">{element.name}</p>
        <CardsAsset cardNo={gameBlocks.indexOf(element)} />
        <div className=" text-center">
          {props.players.map((player, index) => {
            return (
              gameBlocks[player.position] === element && (
                <div>
                  <i class="fa fa-male" style={{ color: player.color, fontSize: '20px' }}></i>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
  function columnCreator(element, index) {
    return (
      <div className="columnContainer">
        <p className="text">{element.name}</p>
        <CardsAsset cardNo={gameBlocks.indexOf(element)} />

        <div className="ml-2 text-center">
          {props.players.map((player, index) => {
            return (
              gameBlocks[player.position] === element && (
                <div>
                  <i class="fa fa-male" style={{ color: player.color, fontSize: '20px' }}></i>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }

  function handleRollDice() {
    const dice1 = Math.floor(Math.random() * Math.floor(5)) + 1;
    const dice2 = Math.floor(Math.random() * Math.floor(5)) + 1;
    setDice1(dice1);
    setDice2(dice2);
    handleSpot(dice1 + dice2);
    setIsRolled(true);
  }
  function handleSpot(move) {
    props.players.map((player, index) => {
      if (turnOf === index) {
        player.position = player.position + move;
      }
      return player;
    });
  }

  const takeAction = () => {
    // let cost =
    //   gameBlocks[dice1 + dice2].price === '' ? gameBlocks[dice1 + dice2 - 1].price : gameBlocks[dice1 + dice2].price;
    // if (turnOf === 1) {
    //   let spotValue = spot1 + dice1 + dice2;
    //   setMoney1(money1 - cost);
    //   console.log(gameBlocks.length);
    //   setSpot1(spotValue / gameBlocks.length >= 1 ? spotValue % gameBlocks.length : spotValue);
    //   setTurnOf(2);
    // } else {
    //   let spotValue = spot2 + dice1 + dice2;
    //   setMoney2(money2 - gameBlocks[dice1 + dice2].price);
    //   setSpot2(spotValue / gameBlocks.length >= 1 ? spotValue % gameBlocks.length : spotValue);
    //   setTurnOf(1);
    // }
  };
  const passAction = () => {
    if (turnOf === 1) {
      setTurnOf(2);
    } else {
      setTurnOf(1);
    }
  };
  return (
    <div className="App fluid-container d-flex justify-content-between">
      <div for="left">
        <button
          className="btn btn-secondary shadow"
          style={{ color: 'white', position: 'absolute', bottom: 30, left: 10 }}
          onClick={() => props.handleScreen(0)}>
          <span aria-hidden="true">&times;</span>Quit Game
        </button>
      </div>
      <div className="mainContainer shadow">
        <div className="d-flex justify-content-center">
          {gameBlocks.slice(20, 31).map((element, index) => blockCreator(element, index))}
        </div>
        <div className="d-flex  justify-content-between">
          <div for="leftColumn" className="d-flex flex-column-reverse">
            {gameBlocks.slice(11, 20).map((element, index) => columnCreator(element, index))}
          </div>
          <div className="d-flex  flex-column justify-content-between">
            <DiceRoller handleRollDice={handleRollDice} dice1={dice1} dice2={dice2} isRolled={isRolled} />
            {isRolled ? (
              <div className="d-flex justify-content-center">
                <LandedCard cardData={gameBlocks[props.players[turnOf].position]} />
              </div>
            ) : (
              <TurnIndicator turnOf={turnOf} />
            )}
            <TradeBox dice1={dice1} dice2={dice2} takeAction={takeAction} passAction={passAction} />
          </div>
          <div for="rightColumn" className="d-flex flex-column">
            {gameBlocks.slice(31, 40).map((element, index) => columnCreator(element, index))}
          </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-center">
          {gameBlocks.slice(0, 11).map((element, index) => blockCreator(element, index))}
        </div>
      </div>

      <div style={{ backgroundColor: 'white', height: '100%' }}>
        <h3>Players</h3>
        <hr />
        <div className="d-flex flex-column justify-content-between">
          {props.players.map((player, index) => {
            return (
              <div style={{ width: '100%' }}>
                <h6 style={turnOf === index ? styles.turn : styles.notTurn}>
                  {turnOf === index ? '-> ' : ''}
                  {player.name}( {player.amount})
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Game;
