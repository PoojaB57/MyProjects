import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardComponent from './components/CardComponent';
import AccordionComponent from './components/AccordionComponent';
import CarouselComponent from './components/CarouselComponent';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <CardComponent />
                <AccordionComponent />
                <CarouselComponent />
            </main>
            <Footer />
        </div>
    );
}

export default App;