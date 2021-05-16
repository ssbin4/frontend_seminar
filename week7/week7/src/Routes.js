import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import MainPage from './main.js';
import MoviePage from './movie.js';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/movies' component={MoviePage}/>
                    <Redirect path="*" to ="/"/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;