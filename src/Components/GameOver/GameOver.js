import React from 'react';
import './GameOver.css';

const GameOver = (props) => {
    return <div className="overlay">
        <div className="gameover-box">
            <h2>Game Over</h2>
            <p>Your score was: {props.score}</p>
            <button onClick={props.closeHandler}>Close</button>
        </div>
    </div>
}

export default GameOver;