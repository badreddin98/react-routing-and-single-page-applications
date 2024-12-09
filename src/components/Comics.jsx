import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Comics = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Comics Collection
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This component is under construction. Check back later for our amazing collection of Marvel comics!
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Comics;
