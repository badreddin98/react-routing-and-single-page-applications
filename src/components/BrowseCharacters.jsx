import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import md5 from 'md5';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            const publicKey = 'aadf2ec9230c5a7e98f64c8da4a97a59';
            const privateKey = '2e62ad11e098e747fabc4f0845e24f5e769b4fd5';
            const ts = new Date().getTime();
            const hash = md5(ts + privateKey + publicKey);

            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
                    params: {
                        ts,
                        apikey: publicKey,
                        hash,
                        limit: 20
                    }
                });
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Marvel Characters
            </Typography>
            <Grid container spacing={3}>
                {characters.map(character => (
                    <Grid item xs={12} sm={6} md={4} key={character.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <Link 
                                        to={`/character-details/${character.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {character.name}
                                    </Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {character.description || 'No description available.'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BrowseCharacters;
