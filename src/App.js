import React, { Component } from 'react';import './App.css';
import DriveMovies from './components/Movies/DriveMovies'
import {Switch, Route} from 'react-router-dom'
import Login from './components/User/Login'
import Register from './components/User/Register'
import LoginHome from './components/User/LoginHome'
import Logout from './components/User/Logout'
import AboutUs from './components/Layout/AboutUs'
import Contact from './components/Layout/Contact'
import Homepage from './components/Layout/Homepage'
import Nav from './components/Layout/Nav'
import OurTeam from './components/Layout/OurTeam'
import SideNav from './components/Layout/SideNav'
import SplashScreen from './components/Layout/SplashScreen'


class App extends Component {

 render() {
   return (
     <div>
       <DriveMovies />

       <Switch>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route path='/LoginHome' component={LoginHome}/>
          <Route path='/Logout' component={Logout}/>
       </Switch>

     </div>
   );
 }
}
export default App;