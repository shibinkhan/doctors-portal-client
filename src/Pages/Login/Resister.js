import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';

const Resister = () => {
    const [loginData, setLoginData] = useState({});
    // console.log(loginData);
    const { user, signUp, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = event => {
        const keyName = event.target.name;
        const value = event.target.value;
        // console.log(keyName, value);
        const newLoginData = { ...loginData };
        newLoginData[keyName] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = event => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Password did not matched!');
            return;
        }
        signUp(loginData.email, loginData.password, loginData.name, history);
        event.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: '150px' }} item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">Resister</Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '66%' }}
                                id="standard-basic"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                label="Name"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '66%' }}
                                id="standard-basic"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                label="Email"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '66%' }}
                                id="standard-password-input"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Password"
                                type="password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '66%' }}
                                id="standard-password-input"
                                name="confirmPassword"
                                onBlur={handleOnBlur}
                                label="Confirm Password"
                                type="password"
                                variant="standard"
                            />
                            <NavLink to="/login"><Button>Already Resistered? Login</Button></NavLink>
                            <Button sx={{ width: '66%', mt: 2 }} type="submit" variant="contained">Sign Up</Button>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">Resistration Successful!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '90%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Resister;