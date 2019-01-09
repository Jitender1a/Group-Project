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
import AllMovies from './components/Movies/AllMovies'
import KidsMovies from './components/Movies/KidsMovies'
import MovieGenres from './components/Movies/MovieGenres'
import MoviesInfo from './components/Movies/MoviesInfo'
import MovieTrailers from './components/Movies/MovieTrailers'
import PopularMovies from './components/Movies/PopularMovies'
import RandomMovies from './components/Movies/RandomMovies'
import RecentlyWatchedMovies from './components/Movies/RecentlyWatchedMovies'
import TrendingMovies from './components/Movies/TrendingMovies'




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
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Homepage' component={Homepage}/>
          <Route path='/Nav' component={Nav}/>
          <Route path='/OurTeam' component={OurTeam}/>
          <Route path='/SideNav' component={SideNav}/>
          <Route path='/SplashScreen' component={SplashScreen}/>
          <Route path='/AllMovies' component={AllMovies}/>
          <Route path='/KidsMovies' component={KidsMovies}/>
          <Route path='/MovieGenres' component={MovieGenres}/>
          <Route path='/MoviesInfo' component={MoviesInfo}/>
          <Route path='/MovieTrailers' component={MovieTrailers}/>
          <Route path='/PopularMovies' component={PopularMovies}/>
          <Route path='/RandomMovies' component={RandomMovies}/>
          <Route path='/RecentlyWatchedMovies' component={RecentlyWatchedMovies}/>
          <Route path='/TrendingMovies' component={TrendingMovies}/>
       </Switch>

     </div>
   );
 }
}
export default App;