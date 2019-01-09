import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoggedOut } from '../ducks/reducer'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Header extends Component {
  logout = () => {
    axios.get('/auth/logout').then(response => {
      this.props.userLoggedOut()
    })
  }

  render() {
    return (
      <div>
        <div></div>
        {this.props.isAuthenticated ? 
        <button onClick={this.logout}>Logout</button> : 
        <button>
          <Link class="LogOutButton" to="Login">Login</Link>
        </button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  let { isAuthenticated } = state
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, { userLoggedOut })(Header)