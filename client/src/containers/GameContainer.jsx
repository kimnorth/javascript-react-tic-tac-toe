import React from 'react';
import BoardContainer from './BoardContainer.jsx'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    return(

      <div className="game-container">
        
        <BoardContainer />
      </div>

    )


  }

}

export default GameContainer;