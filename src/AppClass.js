import React, { Component } from 'react';

class App extends Component {
  
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState( prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div >
        <button onClick={this.incrementCount}>
          I was Clicked {this.state.count} times!
        </button>
      </div>
    );
  }  
}

export default App;
