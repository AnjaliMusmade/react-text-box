import React, { Component } from 'react';




export default class TextBox extends Component{
  constructor(props)
  {
    super(props);
     this.state={
       inputText:""
    };
this.getValue=this.getValue.bind(this);
  };
 
private getValue(event){
this.setState({
  inputText:event.target.value
})
}

  render(){
    return(
      <div>
      <input type="text" onChange={this.getValue}/>
      <div>{this.state.inputText}</div>
      </div>
    );
  }

}
