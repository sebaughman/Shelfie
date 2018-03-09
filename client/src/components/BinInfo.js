import React, { Component } from 'react';
import logo from '../assets/logo.png';
import Link from 'react-router-dom/Link';
import axios from 'axios';
import '../App.css';

class BinInfo extends Component {
  constructor(props){
    super(props)

    this.state ={
      name: '',
      price: '', 
      disabled: 'true'

    }

    this.deleteBinInfo = this.deleteBinInfo.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/bin/${this.props.match.params.shelfID}${this.props.match.params.binID}`)
      .then(({ data })=>{
        let newPrice = data.price;
          if (data.price % 1 === 0 & data.price.indexOf('.00')=== -1){
            newPrice = `${data.price}.00`
          };
        this.setState({
          name: data.name,
          price: newPrice
        })
      })
  };

  addBinInfo(e){
    let newValue = e.target.value;
    if(e.target.name === 'price'){
      newValue = newValue.split('')
      newValue.shift()
      newValue = newValue.join('')
    }
    this.setState({
      [e.target.name]: newValue
    })
  }


  editSaveForm(){
      //button says Save and inputs are editable
      
      if(this.state.disabled === ''){
       
      axios.put(`/api/update/bin/${this.props.match.params.shelfID}${this.props.match.params.binID}`, this.state)
        .then(({ data })=>{
          let newPrice = data.price;
          if (data.price % 1 === 0 & data.price.indexOf('.00') === -1){
            newPrice = `${data.price}.00`
          };
          
          this.setState({
            name: data.name,
            price: newPrice
          })
        })
        .catch(err=>console.error(err))

      this.setState({
        disabled: 'true',
      })
      
    }
    //Edit
    else{
      this.setState({
        disabled: '',
      })
    }

  }

  deleteBinInfo(){
    axios.delete(`/api/delete/bin/${this.props.match.params.shelfID}${this.props.match.params.binID}`)
      .then((response)=>{
        console.log(response)
        this.setState({
          name: '',
          price: ''
        })
        this.props.history.push(`/bins/${this.props.match.params.shelfID}`)
      })
      .catch(err=>console.error(err))
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
                    <h1 className='App-title-bin'>Bin {this.props.match.params.binID}</h1>
                </div>
          </header>

          <div className="bin-info">
          <img src='http://lorempixel.com/200/200/business/' alt="business"/>

            <div className="bin-photo">
              
            </div>

            <div className="bin-form">
              <form onSubmit={(e)=>e.preventDefault()}>

                <div className="bin-inputs">
                  <label>Name</label>
                  <input required disabled={this.state.disabled} name="name" value={this.state.name} type='text' onChange={(e)=>this.addBinInfo(e)}/>
                  <label>Price</label>
                  <input required disabled={this.state.disabled} name="price" value={`$${this.state.price}`} type='text'  onChange={(e)=>this.addBinInfo(e)}/>
                </div>

                <div className="bin-buttons">
                {this.state.disabled === 'true'?
                <button onClick={()=>this.editSaveForm()}> <p>Edit</p> </button>
                : <button className='save-button' onClick={()=>this.editSaveForm()}><p>Save</p></button>
                }
                  {/* <button onClick={()=>this.editSaveForm()}> {this.state.disabled === 'true'? <p>Edit</p>: <p className='save-button'>Save</p>}</button> */}
                  <button onClick={this.deleteBinInfo}>Delete</button>
                </div>

              </form>
            </div>
          
          
          </div>
        </div>
      
    );
  }
}

export default BinInfo;
