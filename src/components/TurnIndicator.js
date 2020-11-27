import React from 'react';
import '../textAnimation.css';

export default function TurnIndicator({ turnOf }) {
  return (
    <div>
      <h1>Player {turnOf + 1}'s turn</h1>
    </div>
  );
}
