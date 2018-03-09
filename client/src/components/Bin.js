import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import '../App.css';

//I could of done this better. I did not need to create a new component for each bin. 
//instead i could of created each bin in my database and then used a GET in my bins component
// and mapped through the returned array to build each bin button.
//I could of checked if each bin had a name (and it wont initially) and display the different 
//links/css depending on that instead of this.state.filled

//okay, job helped me figure out the issue with changing state on an unmounted component. If you are changing state in the 
// same on click that changes state... you may get a race condition. A good way to avoid this is to use a parent state or redux



class Bin extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     filled: null,
  //   }
  // }

  // componentDidMount(){
  //   axios.get(`/api/check/bin/${this.props.shelfID}${this.props.binID}`)
  //     .then((response)=>{
  //       if (response.data.count === '1'){
  //         this.setState({
  //           filled: true
  //         })
  //       }
  //       else {
  //         this.setState({
  //           filled: false
  //         })
  //       }
  //     })
  // }




  

  render() {
    // if (this.props.filled === null) {
    //   return <div>Loading...</div>
    // }

    return (
        <div>
          {this.props.filled === true? 
             <Link to={`/bin/${this.props.shelfID}${this.props.binID}`}> 
               <div className="bin" >Bin {this.props.binID} </div>
             </Link> 

            :<Link to={`/create/${this.props.shelfID}${this.props.binID}`}>
              <div className="bin-empty" > + Add inventory to bin</div>
             </Link>
          }
        </div>
    );
  }
}

export default Bin;
