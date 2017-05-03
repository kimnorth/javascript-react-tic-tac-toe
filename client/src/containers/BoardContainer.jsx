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

  checkForWinner(){

    // const winConditions = [

    let board = this.state.board
    console.log(board)

    if (
      // Player X
      // Horizontal
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      // Vertical
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      // Diagonal
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[6] === "X" && board[4] === "X" && board[2] === "X")

    ){
      console.log("X Wins!")
    }
    else if (
      // Player Y
      // Horizontal
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      // Vertical
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
      // Diagonal
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[6] === "O" && board[4] === "O" && board[2] === "O")      
    ){
      console.log("O Wins!")
    }

  }

   

    // ]

    //console.log(winConditions)

    // winConditions.forEach(function(element){
    //   console.log("element 4: ", winConditions[3])
    //   console.log("state  ",this.state.board)
    //   if (this.state.board == element){
    //     console.log("SAME")
    //     alert("Player " + this.state.chosenLetter + " has won")    
    //   }
    // }.bind(this))
  

  whichClicked(value, playerType){
    var board = this.state.board    
    if (!board[value]){
      this.whichLetter()
      board[value] = this.state.chosenLetter
      this.setState({board: board})
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