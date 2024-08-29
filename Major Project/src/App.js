import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import UserProfile from './components/UserProfile';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails'; // Add this
import Cart from './components/Cart'; // Add this
import UserProfile from './components/UserProfile';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/" component={ProductsList} />
                    <Route path="/profile" component={UserProfile} />
                </Switch>
            </div>
        </Router>
    );

    return (
        <Router>
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/" component={ProductsList} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/profile" component={UserProfile} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;