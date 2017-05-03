import React from 'react';
import BoardContainer from './BoardContainer.jsx'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      xScore: 0,
      oScore: 0
    }
    
  }

  addToXScore(){
    let currentOScore = this.state.oScore;
    let newXScore = (this.state.xScore += 1) 
    this.setState({xScore: newXScore, oScore: currentOScore})
  }

  addToOScore(){
    let currentXScore = this.state.xScore;
    let newOScore = (this.state.oScore += 1)
    this.setState({xScore: currentXScore, oScore: newOScore})
  }

  render(){

    return(

      <div className="game-container">
        <h1 id="game-heading">Tic-Tac-Toe</h1>
        <BoardContainer xScore={this.addToXScore.bind(this)} oScore={this.addToOScore.bind(this)} />
        <h2 className="scoreboard">X Wins: {this.state.xScore} / O Wins: {this.state.oScore}</h2>
      </div>

    )


  }

}

export default GameContainer;