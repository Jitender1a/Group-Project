import React from 'react'
import {withRouter} from 'react-router-dom'
import './Nav.css'
import { userLoggedOut } from '../../../ducks/reducer'
import { connect } from 'react-redux'

function Nav(props) {
    return(
        <div className='nav-bar'>
            <div onClick={() => props.history.push('/')} className='webName'>Le Club</div>
            <div className='routes-container'>
                <div>
                    {
                        props.isAuthenticated ?
                        <button onClick={() => {props.userLoggedOut()}}>Logout</button>
                        :
                        null
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