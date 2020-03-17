
import React, {Component} from 'react'
import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import RSVP from './components/RSVP'
import Ceremony from './components/Ceremony'
import Reception from './components/Reception'
import Afterparty from './components/Afterparty'
import TopPane from'./components/TopPane';
import Registry from './components/Registry';


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
        <Route exact path='/'>
              <TopPane />
              <Ceremony />
              <Reception />
              <Afterparty />
                  
        </Route>
          <Route exact path = "/RSVP">
            <TopPane/>
            <RSVP className = "rsvp"/>
          </Route>
          <Route exact path = "/Ceremony">
            <TopPane/>
            <Ceremony/>
          </Route>
          <Route exact path = "/Reception" >
            <TopPane/>
            <Reception/>
          </Route>
          <Route exact path = "/Afterparty" >
            <TopPane/>
            <Afterparty/>
          </Route>
          <Route exact path = '/registry'>
            <Registry/>
          </Route>
        </BrowserRouter>
        <body/>
      </div>
    );
  }  
}

export default App;
