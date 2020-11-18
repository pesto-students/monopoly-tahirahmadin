import React, { Component } from 'react';
import image1 from './assets/Die_1.png';
import image2 from './assets/Die_2.png';
import image3 from './assets/Die_3.png';
import image4 from './assets/Die_4.png';
import image5 from './assets/Die_5.png';
import image6 from './assets/Die_6.png';
class Dices extends Component {
  render() {
    return (
      <div>
        {this.props.dice === 0 && <div></div>}

        {this.props.dice === 1 && <img src={image1} alt="img2" height="50px" />}
        {this.props.dice === 2 && <img src={image2} alt="img2" height="50px" />}
        {this.props.dice === 3 && <img src={image3} alt="img2" height="50px" />}
        {this.props.dice === 4 && <img src={image4} alt="img2" height="50px" />}
        {this.props.dice === 5 && <img src={image5} alt="img2" height="50px" />}
        {this.props.dice === 6 && <img src={image6} alt="img2" height="50px" />}
      </div>
    );
  }
}
export default Dices;
