import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Nav from './Components/nav/Nav';
import Home from './App';
import PokemonList from './Components/pokemon-list/PokemonList';
import Pokemon from './Components/pokemon/Pokemon';
import BerryList from './Components/berry-list/BerryList';

ReactDOM.render(
    <div className="App">
      <Router>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemons/" exact component={PokemonList} />
            <Route path="/pokemons/:name" component={Pokemon} />
            <Route path="/berries/" component={BerryList}></Route>
        </Switch>
      </Router>
    </div>
  ,
  document.getElementById('root')
);

