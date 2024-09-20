import React from 'react';
import './css/ColorBlocks.css';
import image1 from '../assets/blocks.jpg'; 

const ColorBlocks = () => {
  return (
    <div className="color-blocks">
      <img src={image1} alt="Decorative" className="decorative-image" />
    </div>
  );
};

export default ColorBlocks;
