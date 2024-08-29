import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function CardComponent() {
    return (
        <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/345x140"
                alt="Placeholder"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;