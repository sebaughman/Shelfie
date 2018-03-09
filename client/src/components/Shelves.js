import React, { Component } from 'react';
import logo from '../assets/logo.png';
import Link from 'react-router-dom/Link';
import '../App.css';

class Shelves extends Component {
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">SHELFIE</h1>
          </header>
          
            <div className='shelf-view'>
              <div className='shelf-container'>
                
                <Link to={`/bins/A`} > <div className="shelf">Shelf A</div></Link>
                <Link to={`/bins/B`} > <div className="shelf">Shelf B</div></Link>
                <Link to={`/bins/C`} > <div className="shelf">Shelf C</div></Link>
                <Link to={`/bins/D`} > <div className="shelf">Shelf D</div></Link>

              </div>
            </div>
         
        </div>
      
    );
  }
}

export default Shelves;
