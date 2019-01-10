import React, { Component } from 'react';import './App.css';
import {Switch, Route} from 'react-router-dom'

//Layout
import AboutUs from './components/Layout/AboutUs'
import Contact from './components/Layout/Contact'
import Homepage from './components/Layout/Homepage'
import Nav from './components/Layout/Nav'
import OurTeam from './components/Layout/OurTeam'
import SideNav from './components/Layout/SideNav'
import SplashScreen from './components/Layout/SplashScreen'

//Movies
import DriveMovies from './components/Movies/DriveMovies'
import Popular from './components/Movies/Popular'
import ReleaseDate from './components/Movies/ReleaseDate'
import TopRated from './components/Movies/TopRated'
import MoviesInfo from './components/Movies/MoviesInfo'
import PlayMovie from './components/Movies/PlayMovie'

//Tools
import Admin from './components/Tools/Admin'
import GoogleCast from './components/Tools/GoogleCast'
import Settings from './components/Tools/Settings'

//User
import Login from './components/User/Login'
import Register from './components/User/Register'
import LoginHome from './components/User/LoginHome'
import Logout from './components/User/Logout'
import UserAccount from './components/User/UserAccount'





class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Register' component={Register}/>
            <Route path='/LoginHome' component={LoginHome}/>
            <Route path='/Logout' component={Logout}/>
            <Route path='/DriveMovies' component={DriveMovies}/>
            <Route path='/MovieInfo' component={MoviesInfo}/>
            <Route path='/PlayMovie' component={PlayMovie}/>
        </Switch>
      </div>
    );
  }
}

export default App;
  

{/* <Route path='/AboutUs' component={AboutUs}/> */}
{/* <Route path='/Contact' component={Contact}/> */}
{/* <Route path='/OurTeam' component={OurTeam}/> */}
{/* <Route path='/SideNav' component={SideNav}/> */}
{/* <Route path='/SplashScreen' component={SplashScreen}/> */}

{/* <Route path='/Admin' component={Admin}/> */}
{/* <Route path='/GoogleCast' component={GoogleCast}/> */}
{/* <Route path='/Settings' component={Settings}/> */}

{/* <Route path='/UserAccount' component={UserAccount}/> */}