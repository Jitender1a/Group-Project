import React, { Component } from 'react';import './App.css';
import DriveMovies from './components/Movies/DriveMovies'
import {Switch, Route} from 'react-router-dom'

//User
import Login from './components/User/Login'
import Register from './components/User/Register'
import LoginHome from './components/User/LoginHome'
import Logout from './components/User/Logout'
import UserAccount from './components/User/UserAccount'
//Tv Shows
import AllTvShows from './components/TvShows/AllTvShows'
import DriveTvShows from './components/TvShows/DriveTvShows'
import KidsTvShows from './components/TvShows/KidsTvShows'
import PopularTvShows from './components/TvShows/PopularTvShows'
import RandomTvShows from './components/TvShows/RandomTvShows'
import RecentlyWatchedTvShows from './components/TvShows/RecentlyWatchedTvShows'
import TrendingTvShows from './components/TvShows/TrendingTvShows'
import TvShowGenres from './components/TvShows/TvShowGenres'
import TvShowsInfo from './components/TvShows/TvShowsInfo'
import TvShowTrailers from './components/TvShows/TvShowTrailers'
//Tools
import Admin from './components/Tools/Admin'
import GoogleCast from './components/Tools/GoogleCast'
import Settings from './components/Tools/Settings'



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
           <Route path='/AllTvShows' component={AllTvShows}/>
           <Route path='DriveTvShows' component={DriveTvShows}/>
           <Route path='KidsTvShows' component={KidsTvShows}/>
           <Route path='PopularTvShows ' component={PopularTvShows }/>
           <Route path='RandomTvShows' component={RandomTvShows}/>
           <Route path='RecentlyWatchedTvShows' component={RecentlyWatchedTvShows}/>
           <Route path='TrendingTvShows' component={TrendingTvShows}/>
           <Route path='TvShowGenres' component={TvShowGenres}/>
           <Route path='TvShowsInfo' component={TvShowsInfo}/>
           <Route path='TvShowTrailers' component={TvShowTrailers}/>
           <Route path='Admin' component={Admin}/>
           <Route path='GoogleCast' component={GoogleCast}/>
           <Route path='Settings' component={Settings}/>
           <Route path='UserAccount' component={UserAccount}/>
        </Switch>

      </div>
    );
  }
}
export default App;
