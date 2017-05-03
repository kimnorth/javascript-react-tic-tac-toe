import React from 'react';

class TileComponent extends React.Component {

 
  handleClick(){

    this.props.passedWhichClicked(this.props.index)
  }


  render(){

    return(
      <div className="tile" onClick={this.handleClick.bind(this)}>
        {this.props.chosenLetter}
      </div>
      )

  }

}

export default TileComponent;