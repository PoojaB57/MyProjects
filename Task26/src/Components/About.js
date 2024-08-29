import React from 'react';
import { Carousel } from 'react-bootstrap';

function About() {
    return (
        <div>
            <h2>About Our Team</h2>
            <Carousel>
                <Carousel.Item>
                    <img src="team1.jpg" alt="Team Member 1" />
                    <Carousel.Caption>
                        <h3>Team Member 1</h3>
                        <p>Role</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items for other team members */}
            </Carousel>
        </div>
    );
}

export default About;