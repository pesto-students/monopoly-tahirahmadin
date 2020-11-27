import React from 'react';
const gameBlocks = require('./../data/gameBlocks.json');
function blockCreator(element, index) {
  return (
    <div className="smallContainer">
      <p className="text">{element.name}</p>
    </div>
  );
}
function Blocks() {
  return (
    <div>
      <div className="d-flex flex-row-reverse justify-content-center">
        {gameBlocks.slice(0, 9).map((element, index) => blockCreator(element, index))}
      </div>
    </div>
  );
}
export default Blocks;
