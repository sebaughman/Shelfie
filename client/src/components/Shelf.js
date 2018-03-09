import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import '../App.css';

class Shelf extends Component {
  render() {
    return (
      <Link to={`/bins/${this.props.id}`}> 
        <div className="shelf" >
        <h3>Shelf {this.props.id}</h3>
        
        </div>
      </Link>
    );
  }
}

export default Shelf;
