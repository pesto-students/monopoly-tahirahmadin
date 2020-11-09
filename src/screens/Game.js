import React from 'react';
import { useState, useEffect } from 'react';
import Blocks from '../components/Blocks';
import HoverCard from '../components/HoverCard';
const gameBlocks = require('./../data/gameBlocks.json');
function Game() {
  const [isHovering, setIsHoverering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const handleMouseHover = () => {
    setIsHoverering(true);
    setHoverIndex(0);
  };

  const toggleHoverState = () => {
    setIsHoverering(false);
  };
  return (
    <div className="App container d-flex justify-content-center">
      <div className="mainContainer">
        <div className="d-flex justify-content-center">
          <div className="cornerContainer" onMouseEnter={handleMouseHover} onMouseLeave={toggleHoverState}>
            Corner
          </div>
          {isHovering ? <HoverCard /> : ''}
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="smallContainer">d</div>
          <div className="cornerContainer">Corner</div>
        </div>
        <div className="d-flex justify-content-between">
          <div for="leftColumn">
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
          </div>
          <div for="rightColumn">
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
            <div className="columnContainer">d</div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse justify-content-center">
          <div className="cornerContainer">
            <p className="text">{gameBlocks[0].name}</p>
          </div>

          <Blocks />
          <div className="cornerContainer">Corner</div>
        </div>
      </div>
    </div>
  );
}
export default Game;
