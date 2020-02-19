import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { pokemon } = this.props
    console.log(pokemon)
    return (
        <div>
          Search goes here
          List goes here
        </div>
    )
  }
}

export default App;
