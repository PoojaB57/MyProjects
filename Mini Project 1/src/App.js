import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/post/:id" component={Post} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;