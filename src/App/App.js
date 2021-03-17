import Navigation from '../Navigation/Navigation';
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Home from '../Home/Home';
import Tables from '../Table/Table';
import Cards from '../Cards/Cards';
import Pokemons from '../Pokemons/Pokemons';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Table" component={Tables} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/Pokemons" component={Pokemons} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
