import React from 'react';
import TileComponent from '../components/TileComponent.jsx'

class BoardContainer extends React.Component {

  constructor(props){
    super(props)
    this.whichClicked = this.whichClicked.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      playerTurn: "Player A",
      chosenLetter: ""
    }
  }

  whichLetter(){
    let chosenLetter = ""
    if(this.state.playerTurn === "Player A"){
      chosenLetter = "O"
    }
    else {
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
  

  whichClicked(value, playerType){
    // pick the letter
    
    // update the board where they clicked
    var board = this.state.board
    
    if (!board[value]){
      this.whichLetter()
      board[value] = this.state.chosenLetter
      this.setState({board: board})
      this.changePlayer()
    }

    console.log(value, playerType)
    // change the current player
    
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
          <TileComponent chosenLetter={this.state.board[1]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="1"/>
          <TileComponent chosenLetter={this.state.board[2]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="2"/>
        </div>

        <div className="flex-item">
        <TileComponent chosenLetter={this.state.board[3]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="3"/>
        <TileComponent chosenLetter={this.state.board[4]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="4"/>
        <TileComponent chosenLetter={this.state.board[5]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="5"/>
        </div>

        <div className="flex-item">
        <TileComponent chosenLetter={this.state.board[6]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="6"/>
        <TileComponent chosenLetter={this.state.board[7]} playerTurn={this.state.playerTurn} passedWhichClicked={this.whichClicked} index="7"/>
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