import React, { Component } from 'react';import './App.css';
import {Switch, Route} from 'react-router-dom'

//Layout
import Homepage from './components/Layout/Homepage/Homepage'
import Nav from './components/Layout/Nav/Nav'
import OurTeam from './components/Layout/OurTeam/OurTeam'
import SideNav from './components/Layout/SideNav/SideNav'
import SplashScreen from './components/Layout/SplashScreen/SplashScreen'

//Movies
import DriveMovies from './components/Movies/DriveMovies/DriveMovies'
import Popular from './components/Movies/Popular/Popular'
import ReleaseDate from './components/Movies/ReleaseDate/ReleaseDate'
import TopRated from './components/Movies/TopRated/TopRated'
import MoviesInfo from './components/Movies/MoviesInfo/MoviesInfo'
import PlayMovie from './components/Movies/PlayMovie/PlayMovie'

//Tools
import Admin from './components/Tools/Admin/Admin'
import GoogleCast from './components/Tools/GoogleCast/GoogleCast'
import Settings from './components/Tools/Settings/Settings'

//User
import Login from './components/User/Login/Login'
import Register from './components/User/Register/Register'
import Logout from './components/User/Logout/Logout'
import Account from './components/User/Account/Account'





class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={DriveMovies}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Logout' component={Logout}/>
            <Route path='/DriveMovies' component={DriveMovies}/>
            <Route path='/MovieInfo' component={MoviesInfo}/>
            <Route path='/PlayMovie' component={PlayMovie}/>
            <Route path='/Account' component={Account}/>
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
