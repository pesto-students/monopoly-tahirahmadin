import React, { Component } from 'react';
import GO from './assets/arrow_icon.png';

class LandedCard extends Component {
  render() {
    return (
      <div className="card shadow">
        <div style={{ backgroundColor: this.props.cardData.color }}>
          <h2>{this.props.cardData.name}</h2>
        </div>
        <div className="text-center">
          <img src={GO} alt="img" width="50%" />
        </div>
        <h6 className="mt-4">{this.props.cardData.pricetext}</h6>
      </div>
    );
  }
}
export default LandedCard;
