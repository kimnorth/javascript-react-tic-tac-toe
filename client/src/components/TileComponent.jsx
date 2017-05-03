import React from 'react';

class TileComponent extends React.Component {

 
  handleClick(){

    this.props.passedWhichClicked(this.props.index, "x")
  }


  render(){

    return(
      <div index={this.props.index} className="tile" onClick={this.handleClick.bind(this)}>
        {this.props.chosenLetter}
      </div>
      )

  }

}

export default TileComponent;

// {this.props.tilePositionOnBoard[this.props.value]}