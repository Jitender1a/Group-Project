import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Nav.css'
import { userLoggedOut } from '../../../ducks/reducer'
import { connect } from 'react-redux'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <h1 onClick={() => props.history.push('/')}>MARVEL</h1>
            <div className='routes-container'>
                <div>
                    <Link to='/DriveMovies'>Movies</Link>
                    {
                        props.isAuthenticated ?
                        <button onClick={() => {props.userLoggedOut()}}>Logout</button>
                        :
                        <Link to='/Login'>Login</Link>
                    }
                    {/* <Link to='/LoginHome'>Login</Link> */}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    let { isAuthenticated } = state 
    return {
        isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps, { userLoggedOut })(Nav))