import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Account.css'

class LoginHome extends Component{
    render(){
        return(

          <div className="user">
            <div class="LoginHome">
                <Link class="LoginLink"to='Login'>Login</Link>
            </div>  

            <div className="line"></div>
            <div class="RegHome">
            <Link class="RegLink"to ='Register'>Register</Link>
            </div>  
            
            <div className="line"></div>
            <div class="RegHome">
                <Link class="RegLink" to="Logout">Logout</Link>
            </div>
            <div>
            {/* <Link to="UserAccount">Users Account</Link> */}
            </div>
        </div>     
        )

    }
}
export default LoginHome