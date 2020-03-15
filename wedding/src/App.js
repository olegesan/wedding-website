
import React, {Component} from 'react'
import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import RSVP from './components/RSVP'
import MainPane from './components/MainPane'
import Ceremony from './components/Ceremony'
import Reception from './components/Reception'
import Afterparty from './components/Afterparty'

function Head() {
  return (
    <html>
      <head>
        <style>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet"></link>
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

        <Head/>
        <BrowserRouter>
          <Header className = "header-nav-bar" handleEnter = {this.handleEnter}></Header>
            <MainPane className={"main-pane"}></MainPane>
          <Route exact path = "/RSVP" render = {() => <RSVP className = "rsvp"/>}/>
          <Route exact path = "/Ceremony" render = {() => <Ceremony/>}/>
          <Route exact path = "/Reception" render = {() => <Reception/>}/>
          <Route exact path = "/Afterparty" render = {() => <Afterparty/>}/>
        </BrowserRouter>
        <body/>
      </div>
    );
  }  
}

export default App;
