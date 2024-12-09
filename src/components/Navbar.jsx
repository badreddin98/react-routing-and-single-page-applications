import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => ({
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink 
                        to="/browse-characters" 
                        style={({ isActive }) => ({
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        <Button color="inherit">Browse Characters</Button>
                    </NavLink>
                    <NavLink 
                        to="/comics" 
                        style={({ isActive }) => ({
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        <Button color="inherit">Comics</Button>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
