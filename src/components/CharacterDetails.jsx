import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Grid, CircularProgress, Box, Button, Card, CardMedia } from '@mui/material';
import axios from 'axios';
import md5 from 'md5';

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            const publicKey = 'YOUR_PUBLIC_KEY';
            const privateKey = 'YOUR_PRIVATE_KEY';
            const ts = new Date().getTime();
            const hash = md5(ts + privateKey + publicKey);

            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
                    params: {
                        ts,
                        apikey: publicKey,
                        hash
                    }
                });
                setCharacter(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching character details:', error);
                setLoading(false);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!character) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Character not found
                    </Typography>
                    <Button variant="contained" onClick={() => navigate('/browse-characters')}>
                        Back to Characters
                    </Button>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Button 
                variant="contained" 
                onClick={() => navigate('/browse-characters')}
                sx={{ mb: 3 }}
            >
                Back to Characters
            </Button>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            sx={{ height: 400, objectFit: 'cover' }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h4" gutterBottom>
                            {character.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {character.description || 'No description available.'}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Comics Appearances
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.comics.available} comics
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Series Appearances
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.series.available} series
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Stories Appearances
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.stories.available} stories
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CharacterDetails;
