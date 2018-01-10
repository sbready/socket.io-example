import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import io from 'socket.io-client'
const socket = io()

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      message: 'Hello World'
    }

    this.changeMessage = this.changeMessage.bind(this)

    socket.on( 'response', data => {
      this.setState( { message: data.message } )
    } )

  }

  changeMessage() {
    socket.emit( 'send message' )
  }

  render() {
    return (
      <div className="App">

        <h1>{this.state.message}</h1>
        <button onClick={ () => this.changeMessage() }>Change Message</button>
        
      </div>
    )
  }
}

export default App;
