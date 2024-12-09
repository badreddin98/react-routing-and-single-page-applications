import React from 'react';
import { Container, Paper, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
                        Page Not Found
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The page you are looking for does not exist or has been moved.
                    </Typography>
                    <Button 
                        variant="contained" 
                        onClick={() => navigate('/')}
                        sx={{ mt: 2 }}
                    >
                        Go to Home
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default NotFound;
