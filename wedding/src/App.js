import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleEnter = (e) => {
      this.setState({
        ticker:e.toUpperCase()
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
