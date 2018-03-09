import React, { Component } from 'react';
import logo from '../assets/logo.png';
import Link from 'react-router-dom/Link';
import axios from 'axios';
import '../App.css';

class BinInfo extends Component {
  constructor(props){
    super(props)

    this.state ={
      name: 'Empty Bin',
      price: '0', 
    

    }
  }

  addBinInfo(e){
    let newValue = e.target.value;
    if(e.target.name === 'price'){
      newValue = newValue.split('')
      newValue.shift()
      newValue = newValue.join('')
    }

    let re = /^\d*\.?\d*$/;
    if(e.target.name === 'price' & re.test(newValue) || e.target.name === 'name'){
    this.setState({
      [e.target.name]: newValue
    })
  }
  }
 
  postBinInfo(){
    let newPrice = this.state.price;
    if (this.state.price % 1 === 0 & this.state.price.indexOf('.00') === -1){
      newPrice = `${this.state.price}.00`
      this.setState({
        price: newPrice
      })
    };
      axios.post(`/api/create/bin/${this.props.match.params.shelfID}${this.props.match.params.binID}`, this.state)
        .then(({data})=>{
            console.log(data)
  
            this.props.history.push(`/bins/${this.props.match.params.shelfID}`)

        })
        .catch((err)=>{
          console.error(err)
        })
  }
 




  render() {
    return (
      
        <div className="App">
          <header className="App-header-bins">
                <Link to="/"> 
                    <div className='logo-container logo-binInfo'>
                      <img src={logo} className="App-logo-bins" alt="logo" />
                    </div>
                </Link>

                <Link to={`/bins/${this.props.match.params.shelfID}`}>
                    <div className='shelf-title'>
                        <h1 className="App-title-bins">Shelf {this.props.match.params.shelfID}</h1> 
                    </div>
                </Link>

                <div className='bin-title'>
                    <h1 className='App-title-bin'> Add to Bin {this.props.match.params.binID}</h1>
                </div>
          </header>

         

            <div className="bin-form create-form">
              <form onSubmit={(e)=>e.preventDefault()}>

                <div className="bin-inputs">
                  <label>Name</label>
                  <input required name="name" value={this.state.name} type='text' onChange={(e)=>this.addBinInfo(e)}/>
                  <label>Price</label>
                  <input  name="price" value={`$${this.state.price}`} type='text' onChange={(e)=>this.addBinInfo(e)}/>
                </div>

                <div >
                  <button className="add-inventory-button" onClick={()=>this.postBinInfo()}>+ Add to Inventory</button>
                </div>

              </form>
            </div>
          
          
          </div>
        
      
    );
  }
}

export default BinInfo;
