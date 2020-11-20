import React from 'react';
import { useState, useEffect } from 'react';
import Blocks from '../components/Blocks';
import DiceRoller from '../components/DiceRoller';
import HoverCard from '../components/HoverCard';
import TradeBox from '../components/TradeBox';
const gameBlocks = require('./../data/gameBlocks.json');
function Game(props) {
  const [isHovering, setIsHoverering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [money1, setMoney1] = useState(1500);
  const [money2, setMoney2] = useState(1500);
  const [dice1, setDice1] = useState(-1);
  const [dice2, setDice2] = useState(-1);
  const [spot1, setSpot1] = useState(0);
  const [spot2, setSpot2] = useState(0);

  const [diceCount, setDiceCount] = useState(0);
  const [turnOf, setTurnOf] = useState(1);
  const [assets1, setAssets1] = useState([]);
  const [assets2, setAssets2] = useState([]);

  // const handleMouseHover = () => {
  //   setIsHoverering(true);
  //   setHoverIndex(0);
  // };

  // const toggleHoverState = () => {
  //   setIsHoverering(false);
  // };
  let styles = {
    turn: {
      border: '1px solid #212121',
      margin: 5,
    },
    notTurn: {
      margin: 5,
    },
  };
  const checkTurn = () => {
    return diceCount % 2 === 0;
  };
  function blockCreator(element, index) {
    return (
      <div className="smallContainer">
        <p className="text">{element.name}</p>
        <div className="ml-2 text-center">
          {' '}
          {gameBlocks[turnOf === 1 ? spot1 : spot2] === element && (
            <div style={{ backgroundColor: turnOf === 1 ? 'green' : 'red', width: '15px', height: '15px' }}></div>
          )}
        </div>
      </div>
    );
  }
  function columnCreator(element, index) {
    return (
      <div className="columnContainer">
        <p className="text">{element.name}</p>
        <div className="ml-2 text-center">
          {' '}
          {gameBlocks[turnOf === 1 ? spot1 : spot2] === element && (
            <div style={{ backgroundColor: turnOf === 1 ? 'green' : 'red', width: '15px', height: '15px' }}></div>
          )}
        </div>
      </div>
    );
  }

  function handleRollDice() {
    const dice1 = Math.floor(Math.random() * Math.floor(5)) + 1;
    const dice2 = Math.floor(Math.random() * Math.floor(5)) + 1;
    setDice1(dice1);
    setDice2(dice2);
    setDiceCount(diceCount + 1);
  }

  const takeAction = () => {
    let cost =
      gameBlocks[dice1 + dice2].price === '' ? gameBlocks[dice1 + dice2 - 1].price : gameBlocks[dice1 + dice2].price;
    if (turnOf === 1) {
      let spotValue = spot1 + dice1 + dice2;
      setMoney1(money1 - cost);
      console.log(gameBlocks.length);
      setSpot1(spotValue / gameBlocks.length >= 1 ? spotValue % gameBlocks.length : spotValue);
      setTurnOf(2);
    } else {
      let spotValue = spot2 + dice1 + dice2;
      setMoney2(money2 - gameBlocks[dice1 + dice2].price);

      setSpot2(spotValue / gameBlocks.length >= 1 ? spotValue % gameBlocks.length : spotValue);
      setTurnOf(1);
    }
  };
  const passAction = () => {
    if (turnOf === 1) {
      setTurnOf(2);
    } else {
      setTurnOf(1);
    }
  };
  return (
    <div className="App container d-flex justify-content-center">
      <div className="float-left">
        <button
          className="btn btn-secondary"
          style={{ backgroundColor: '#e5e5e5', color: 'black' }}
          onClick={() => props.handleScreen(0)}>
          {'<'}Exit
        </button>
      </div>
      <div className="mainContainer">
        <div className="d-flex justify-content-center">
          {gameBlocks.slice(20, 31).map((element, index) => blockCreator(element, index))}
        </div>
        <div className="d-flex  justify-content-between">
          <div for="leftColumn" className="d-flex flex-column-reverse">
            {gameBlocks.slice(11, 20).map((element, index) => columnCreator(element, index))}
          </div>
          <div className="d-flex  flex-column justify-content-between">
            <DiceRoller handleRollDice={handleRollDice} dice1={dice1} dice2={dice2} />
            <TradeBox dice1={dice1} dice2={dice2} takeAction={takeAction} passAction={passAction} />
            <div className="d-flex  flex-row justify-content-between">
              {checkTurn}
              <h6 style={turnOf === 1 ? styles.turn : styles.notTurn}>
                {turnOf === 1 ? <span style={{ color: 'green', width: 10 }}> • </span> : ''}
                {props.player1}: $ {money1}
              </h6>
              <h6 style={turnOf === 2 ? styles.turn : styles.notTurn}>
                {turnOf === 2 ? <span style={{ color: 'red', width: 10 }}> • </span> : ''}
                {props.player2}: $ {money2}
              </h6>
            </div>
          </div>
          <div for="rightColumn" className="d-flex flex-column">
            {gameBlocks.slice(31, 40).map((element, index) => columnCreator(element, index))}
          </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-center">
          {gameBlocks.slice(0, 11).map((element, index) => blockCreator(element, index))}
        </div>
      </div>
    </div>
  );
}
export default Game;
