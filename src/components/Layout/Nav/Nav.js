import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Nav.css'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <h1 onClick={() => props.history.push('/')}>Flixify</h1>
            <div>
                <div>
                    <Link to='/DriveMovies'>Movies</Link>
                    <Link to='/Account'>Account</Link>
                    {/* <Link to='/LoginHome'>Login</Link> */}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav)