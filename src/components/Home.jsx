import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to Marvel Comics Library
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
                        Explore the vast universe of Marvel characters and comics
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Browse through our extensive collection of Marvel characters and discover 
                        their stories, powers, and the comics they appear in.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Home;
