import React from 'react';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home'
import Movies from './Movies'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        { 'title': 'Pulp Fiction',
          'year': 1994,
          'EMDB Score': 8.9},
        { 'title': 'Lost in Translation',
          'year': 2003,
          'EMDB Score': 8.2},
        { 'title': 'The Secret of NIMH',
          'year': 1982,
          'EMDB Score': 7.8},
        { 'title': 'Big Trouble in Little China',
          'year': 1986,
          'EMDB Score': 10.0}
      ]
    }
  }

  render () {
    return (
      <div className="App">
      <h2>EMDB</h2>

        <nav>
          <Link to='/' className='nav'>Home</Link>
          <Link to='/movies' className='nav'>Movies</Link>

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

        </Switch>

      </div>
    );
  }

}


export default App;
