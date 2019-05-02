import React from 'react';
import './App.css';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home'
import Movies from './Movies'
import MovieDeets from './MovieDeets'
import NotFound from './NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        { 'title': 'Pulp Fiction',
          'year': 1994,
          'EMDB_Score': 8.9,
          'poster': 'https://images-na.ssl-images-amazon.com/images/I/51KEdMtQm-L.jpg'},
        { 'title': 'Lost in Translation',
          'year': 2003,
          'EMDB_Score': 8.2,
          'poster': 'http://i.ebayimg.com/00/s/NDk5WDMyNA==/z/SnkAAOxy7nNTVlXT/$_3.JPG?set_id=2'},
        { 'title': 'The Secret of NIMH',
          'year': 1982,
          'EMDB_Score': 7.8,
          'poster': 'https://images-na.ssl-images-amazon.com/images/I/51ZRyDxsroL.jpg'},
        { 'title': 'Big Trouble in Little China',
          'year': 1986,
          'EMDB_Score': 10.0,
          'poster': 'https://images-na.ssl-images-amazon.com/images/I/515ukfoofxL.jpg'}
      ]
    }
  }

  render () {
    return (
      <div className="App">
      <h2>EMDB</h2>

        <nav>
          <NavLink exact activeClassName="active" to='/' className='nav'>Home</NavLink>
          <NavLink activeClassName="active" to='/movies' className='nav'>Movies</NavLink>

        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies'
            render={(props) =>(
              <Movies {...props}
                      movies={this.state.movies}
              />
            )}
            />
          <Route component={NotFound} />

        </Switch>
        <hr></hr>
        <Route path='/movies/:movie'
          render={(props) => (
            <MovieDeets {...props}
                        movies={this.state.movies}
            />
          )}
          />

      </div>
    );
  }

}


export default App;
