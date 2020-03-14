import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  handleEnter = (e) => {
      this.setState({
        ticker:e.toUpperCase()
    }) 
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
