import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'

function Head() {
  return (
    <html>
      <head>
        <style>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"/>
        </style>
      </head>
    </html>
  )
}

class App extends Component {
  handleEnter = (e) => {
      this.setState({
        ticker:e.toUpperCase()
    }) 
  }

  render() {
    return (
      <div className="App">
        <Head></Head>
        <Header></Header>
        <body></body>
      </div>
    );
  }  
}

export default App;
