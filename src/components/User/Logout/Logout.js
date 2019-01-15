import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoggedOut } from '../../../ducks/reducer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Logout.css'

class Header extends Component {
  logout = () => {
    axios.get('/auth/logout').then(response => {
      this.props.userLoggedOut()
    })
  }

  render() {
    return (
      <div>
        <Link to='/'>
          <button onClick={() => {this.props.userLoggedOut()}}>Logout</button> : 
        </Link>
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