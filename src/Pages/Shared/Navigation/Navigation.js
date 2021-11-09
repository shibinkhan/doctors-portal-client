import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor's Portal
                    </Typography>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment"><Button color="inherit">Apointment</Button></NavLink>
                    {
                        user?.email &&
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit">DashBorad</Button></NavLink>
                    }
                    {
                        user?.email ?
                            <Button onClick={logOut} color="inherit">Log Out</Button> :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Log In</Button></NavLink>
                    }
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;