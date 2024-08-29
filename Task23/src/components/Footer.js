import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 4 }}>
            <Typography variant="body1" color="inherit" align="center">
                © 2024 My Website
            </Typography>
        </Box>
    );
}

export default Footer;