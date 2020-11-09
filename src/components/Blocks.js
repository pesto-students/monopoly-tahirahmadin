import React from 'react';
const gameBlocks = require('./../data/gameBlocks.json');

function Blocks() {
  function blockCreator(element, index) {
    return (
      <div className="smallContainer">
        <p className="text">{element.name}</p>
      </div>
    );
  }

  return <div>{gameBlocks.map((element, index) => blockCreator(element, index))}</div>;
}
export default Blocks;
