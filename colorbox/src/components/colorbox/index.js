import React, { useState } from "react";
import './style.scss';

const getColor = () => {
    const COLOR = ['lightblue', 'crimson', 'black', 'white','green','yellow','red']
    const randomIndex = Math.floor(Math.random() * 6);
    return COLOR[randomIndex];
}



// MAIN FUNC
const ColorBox = () => {
    const [color, setColor] = useState ( ()=> {
        const initColor = 'white' || localStorage.getItem('box_color');
        return initColor;
    })

    const handleClickBox = () => {
        const newColor = getColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }

    return (
    <div className="wrapper">
      <p>Welcome to React with Hooks</p>
      <div 
      onClick={handleClickBox}
      style={{backgroundColor: color}} 
      className="box"/>
    </div>
  );
};

export default ColorBox;
