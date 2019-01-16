import React, { Component } from 'react';import './App.css';
import {Switch, Route} from 'react-router-dom'

//Layout
import Nav from './components/Layout/Nav/Nav'

//Movies
import DriveMovies from './components/Movies/DriveMovies/DriveMovies'
import MoviesInfo from './components/Movies/MoviesInfo/MoviesInfo'
import PlayMovie from './components/Movies/PlayMovie/PlayMovie'
import Search from './components/Movies/Search/Search'


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
            <Route path='/Search' component={Search}/>
        </Switch>
      </div>
    );
  }
}

export default App;
