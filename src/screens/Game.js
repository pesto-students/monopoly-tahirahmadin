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

  const handleMouseHover = () => {
    setIsHoverering(true);
    setHoverIndex(0);
  };

  const toggleHoverState = () => {
    setIsHoverering(false);
  };

  function blockCreator(element, index) {
    return (
      <div className="smallContainer">
        <p className="text">{element.name}</p>
      </div>
    );
  }
  function columnCreator(element, index) {
    return (
      <div className="columnContainer">
        <p className="text">{element.name}</p>
      </div>
    );
  }
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
            <DiceRoller />
            <TradeBox />
            <div className="d-flex  flex-row justify-content-between">
              <h6>
                <span style={{ color: 'green' }}>• </span>
                {props.player1}: $ {money1}
              </h6>
              <h6>
                {' '}
                <span style={{ color: 'red' }}>• </span>
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
