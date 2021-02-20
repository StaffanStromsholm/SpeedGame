import './App.css';
import React, { Component } from 'react';
import Circle from './Components/Circle/Circle';
import GameOver from './Components/GameOver/GameOver';

//gets random number 1-4 
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    counter: 0,
    showGameOver: false,
    gameHasStarted: false,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "blue" },
      { id: 3, color: "red" },
      { id: 4, color: "yellow" }
    ]
  }

  pace = 1500;
  timer = undefined;
  pickedButtons = [];
  hitButtons = [];

  clickHandler = (id) => {
    //push the clicked button to hitButtons array
    this.hitButtons.push(id);
    //compare if the button clicked is the same as the active button, if not then it's game over! Really strict rules here!
    if (this.hitButtons[this.state.counter] !== this.pickedButtons[this.state.counter]) {
      this.stopHandler();
      return
    }
    this.setState({
      score: this.state.score + 1,
      counter: this.state.counter + 1,
      rounds: 0
    })
  }

  nextCircle = () => {

    if (this.state.rounds >= 10) {
      this.stopHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.pickedButtons.push(nextActive);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1
    })

    this.pace *= 0.97;
    this.timer = setTimeout(this.nextCircle, this.pace)

    console.log('Active circle is: ', this.state.current);
  }

  startHandler = () => {
    //prevents the game from being started several times
    if (this.state.gameHasStarted) {
      return
    }
    this.setState({ gameHasStarted: true })
    this.nextCircle();
  }

  stopHandler = () => {
    clearTimeout(this.timer);

    this.setState({ showGameOver: true });
  }

  closeHandler = () => {
    window.location.reload();
}

  render() {
    const circles = this.state.circles.map(circle => {
      return <Circle key={circle.id}
        color={circle.color}
        click={() => this.clickHandler(circle.id)}
        active={this.state.current === circle.id} />
    })
    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>You score is: {this.state.score}</p>
        <div>{circles}</div>

        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} closeHandler={this.closeHandler} />}
      </div>
    );
  }
}

export default App;