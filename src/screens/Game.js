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
                  <i class="fa fa-male" style={{ color: player.color, fontSize: '20px', zIndex: 100 }}></i>
                </div>
              )
            );
          })}
        </div>
        <div style={{ position: 'relative', top: 40 }}>
          {props.players.map((player, index) => {
            return player.properties.map((property) => {
              if (property.name === element.name) {
                return (
                  <div>
                    <div style={{ height: 10, width: '100%', backgroundColor: player.color }}></div>
                  </div>
                );
              }
            });
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
        if (player.position + move > gameBlocks.length) {
          player.position = (player.position + move) % gameBlocks.length;
        } else {
          player.position = player.position + move;
        }
      }
      return player;
    });
  }
  const handleTurn = () => {
    if (turnOf < props.players.length - 1) {
      setTurnOf(turnOf + 1);
    } else {
      setTurnOf(0);
    }
  };
  const handleBuy = () => {
    let currentPlayerPosition = props.players[turnOf].position;
    let cost =
      gameBlocks[props.players[turnOf].position].price === ''
        ? gameBlocks[props.players[turnOf].position - 1].price
        : gameBlocks[props.players[turnOf].position].price;
    let propertyObject = {
      name: gameBlocks[currentPlayerPosition].name,
      price: cost,
    };

    props.players.map((player, index) => {
      if (turnOf === index) {
        player.properties.push(propertyObject);

        player.amount = player.amount - cost;
      }
      return player;
    });
    handleTurn();
    setIsRolled(false);
    setDice1(-1);
    setDice2(-1);
  };
  const handlePass = () => {
    handleTurn();
    setIsRolled(false);
    setDice1(-1);
    setDice2(-1);
  };
  return (
    <div className="App container-fluid  d-flex justify-content-between" style={{ width: '100vw' }}>
      <div for="left" style={{ width: '10vw' }}>
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
            <TradeBox dice1={dice1} dice2={dice2} handleBuy={handleBuy} handlePass={handlePass} isRolled={isRolled} />
          </div>
          <div for="rightColumn" className="d-flex flex-column">
            {gameBlocks.slice(31, 40).map((element, index) => columnCreator(element, index))}
          </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-center">
          {gameBlocks.slice(0, 11).map((element, index) => blockCreator(element, index))}
        </div>
      </div>

      <div style={{ backgroundColor: 'white', height: '100%', marginTop: 10 }}>
        <h3>Players</h3>
        <hr />
        <div className="d-flex flex-column justify-content-between">
          {props.players.map((player, index) => {
            return (
              <div style={{ minWidth: 200 }}>
                <h6 className="text-left" style={turnOf === index ? styles.turn : styles.notTurn}>
                  <span style={{ color: player.color }}> {turnOf === index ? '-> ' : ''}</span>
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
