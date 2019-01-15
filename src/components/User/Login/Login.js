import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLoggedIn } from '../../../ducks/reducer'
import './Login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(response => {
      let user = response.data
      this.props.userLoggedIn(user)
    }).catch(err => {
      console.log(err.response)
      this.setState({
        error: err.response.data
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleClick()
    }
  }

  render() {
    return this.props.isAuthenticated ? 
    <Redirect to="/"/> :
    <div class="loginPage">
      <h1>Login</h1>
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={this.state.username} 
        onChange={this.handleChange} />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={this.state.password} 
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress} />
      <button class="LoginButton"onClick={this.handleClick}>submit</button>
      {this.state.error}
    </div>
  }
}

function mapStateToProps(state) {
  let { isAuthenticated } = state
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, { userLoggedIn })(Login)