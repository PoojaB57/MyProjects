import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function CarouselComponent() {
    const items = [
        {
            name: "Item 1",
            description: "Description of Item 1"
        },
        {
            name: "Item 2",
            description: "Description of Item 2"
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Paper key={i} style={{ padding: '20px', textAlign: 'center' }}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button className="CheckButton">Check it out!</Button>
                </Paper>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;