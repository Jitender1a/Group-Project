import React, { Component } from 'react';import './App.css';
import DriveMovies from './components/Movies/DriveMovies'
import {Switch, Route} from 'react-router-dom'
import Login from './components/User/Login'
import Register from './components/User/Register'
import LoginHome from './components/User/LoginHome'
import Logout from './components/User/Logout'
import MoviesInfo from './components/Movies/MoviesInfo';

class App extends Component {

 render() {
   return (
     <div>

       <Switch>
          <Route exact path='/' component={DriveMovies}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route path='/LoginHome' component={LoginHome}/>
          <Route path='/Logout' component={Logout}/>
          <Route path='/MovieInfo' component={MoviesInfo}/>
       </Switch>

     </div>
   );
 }
}
export default App;