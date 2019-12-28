import React, { Component } from 'react';

class Login extends Component {

  state = {
    name: "",
    password: ""
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render(){
    return(
      <div>
        <input type='text' name='name' onChange={this.handleInputChange} value={this.state.name} placeholder='enter name' />
        <input type='password' name='password' onChange={this.handleInputChange} value={this.state.password} placeholder='enter password' />
        <input type='button' onClick={(e) => this.props.handleLogin(e,this.state)} value={'Login'} />
      </div>
    )
  }
}

export default Login;
