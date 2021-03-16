import Navigation from '../Navigation/Navigation';
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import WelcomePage from '../WelcomePage/WelcomePage';
import Tables from '../Table/Table';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/WelcomePage" component={WelcomePage} />
            <Route exact path="/Table" component={Tables} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
