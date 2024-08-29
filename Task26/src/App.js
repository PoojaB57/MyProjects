import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/movies" exact component={Movie} />
                    <Route path="/movies/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;