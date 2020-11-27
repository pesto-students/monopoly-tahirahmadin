import React, { Component } from 'react';
import arrow_icon from '../assets/arrow_icon.png';
import chance_icon from '../assets/chance_icon.png';
import electric_icon from '../assets/electric_icon.png';
import community_chest_icon from '../assets/community_chest_icon.png';
import free_parking_icon from '../assets/free_parking_icon.png';
class CardsAsset extends Component {
  render() {
    const { cardNo } = this.props;
    return (
      <div>
        {cardNo === 0 && <img src={arrow_icon} alt="img" width="20px" />}
        {(cardNo === 7 || cardNo === 22 || cardNo === 36) && <img src={chance_icon} alt="img" width="15px" />}
        {cardNo === 12 && <img src={electric_icon} alt="img" width="20px" />}

        {(cardNo === 17 || cardNo === 33) && <img src={community_chest_icon} alt="img" width="15px" />}
        {cardNo === 20 && <img src={free_parking_icon} alt="img" width="20px" />}
      </div>
    );
  }
}
export default CardsAsset;
