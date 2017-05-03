class EvaluateWin {

  evaluate(board, addToXScore, addToOScore){
    let gameOver = false;
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
      console.log(addToXScore)
      addToXScore()
      gameOver = true;
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
      addToOScore()
      gameOver = true;
    }
    return gameOver;
  }

}

export default EvaluateWin;