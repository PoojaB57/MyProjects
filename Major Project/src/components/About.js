import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Our Vision</h3>
                        <p>We strive to deliver the best experience.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Our Team</h3>
                        <p>Meet the people behind our success.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default About;