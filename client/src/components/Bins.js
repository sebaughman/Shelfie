import React, { Component } from 'react';
import logo from '../assets/logo.png';
import Bin from './Bin'
import Link from 'react-router-dom/Link';
import '../App.css';
import axios from 'axios';

class Bins extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }

    this.binIds = ['1', '2', '3', '4', '5'];
  }

  componentWillMount() {
    const shelf = this.props.match.params.shelfID;
    Promise.all(this.binIds.map(id => { 
      return axios.get(`/api/check/bin/${ shelf }${ id }`)
        .then(({data}) => {
          return data.count
        })
    }))
      .then(results =>  this.setState({ results }))
  }

  render() {

    if (this.state.results.length < 1) {
      return <div>Loading...</div>
    }

    const binMap = this.state.results.map((result, i) => {
      const filled = result === '1' ? true : false;
      
      return <Bin 
        key={ i }
        filled={ filled }
        shelfID={ this.props.match.params.shelfID } 
        binID={ i + 1 } 
      />
    })

    return (
      
        <div className="App">
          <header className="App-header-bins">

            <Link to="/"> 
              <div className='logo-container'>
              <img src={logo} className="App-logo-bins" alt="logo" />
              </div>
            </Link>

            <h1 className="App-title-bins">Shelf {this.props.match.params.shelfID}</h1> 

          </header>
          
          <div className='bin-view'>
              <div className='bin-container'>
                { binMap }
                  {/* <Bin shelfID={this.props.match.params.shelfID} binID='1' />
                  <Bin shelfID={this.props.match.params.shelfID} binID='2' />
                  <Bin shelfID={this.props.match.params.shelfID} binID='3' />
                  <Bin shelfID={this.props.match.params.shelfID} binID='4' />
                  <Bin shelfID={this.props.match.params.shelfID} binID='5' /> */}
              </div>
          </div>
         
        </div>
      
    );
  }
}


export default Bins;
