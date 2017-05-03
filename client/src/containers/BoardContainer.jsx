import React from 'react';
import TileComponent from '../components/TileComponent.jsx'
import EvaluateWin from '../models/EvaluateWin.js'

class BoardContainer extends React.Component {

  constructor(props){
    super(props)
    this.whichClicked = this.whichClicked.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      playerTurn: "Player A",
      chosenLetter: null
    }
    this.evaluateWin = new EvaluateWin()
  }

  whichLetter(){
    // console.log("Current Letter:", this.state.chosenLetter)
    let chosenLetter = ""
    if(this.state.playerTurn === "Player A"){
      chosenLetter = "O"
    }
    else if (this.state.playerTurn === "Player B"){
      chosenLetter = "X"
    }
    this.setState({chosenLetter: chosenLetter})
  }

  changePlayer(){
    let currentPlayer = ""
    if (this.state.playerTurn === "Player A"){
      currentPlayer = "Player B"
    }
    else if (this.state.playerTurn === "Player B"){
      currentPlayer = "Player A"
    }
    this.setState({playerTurn: currentPlayer})
  }

  checkForWinner(){
    let gameOver = this.evaluateWin.evaluate(this.state.board, this.props.xScore, this.props.oScore)
    if (gameOver){
      this.setState({board: [null, null, null, null, null, null, null, null, null]})
    }
  }

  whichClicked(value, playerType){
    // var board = this.state.board

    // Letter and player are O

    // If it doesn't have a value, add it and change the letter    
    if (!this.state.board[value]){
      // Set the board array with chosenLetter
      this.state.board[value] = this.state.chosenLetter
      this.setState({board: this.state.board})
      console.log("Current Letter", this.state.chosenLetter)
      this.whichLetter()
      console.log("Current Letter", this.state.chosenLetter)
      this.changePlayer()
    }

    this.checkForWinner()
    // console.log(value, playerType)
  }

  handleResetClick(){
    const newBoard = [null, null, null, null, null, null, null, null, null]
    this.setState({board: newBoard})
  }

  render(){

    return(

      <div className="board-container">

        <div className="flex-item">
          <TileComponent chosenLetter={this.state.board[0]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="0"/>
          <TileComponent chosenLetter={this.state.board[3]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="3"/>
          <TileComponent chosenLetter={this.state.board[6]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="6"/>

          
        </div>

        <div className="flex-item">
           <TileComponent chosenLetter={this.state.board[1]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="1"/>
          <TileComponent chosenLetter={this.state.board[4]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="4"/>
          <TileComponent chosenLetter={this.state.board[7]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="7"/>
        </div>

        <div className="flex-item">
          <TileComponent chosenLetter={this.state.board[2]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="2"/>
          <TileComponent chosenLetter={this.state.board[5]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="5"/>
          <TileComponent chosenLetter={this.state.board[8]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="8"/>
        </div>
      

        <div id="button-div">
          <button onClick={this.handleResetClick}>Reset</button>
        </div>

      </div>

    )

  }

}

export default BoardContainer;