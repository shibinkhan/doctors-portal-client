import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    // console.log(loginData);
    const { user, googleSignIn, signIn, isLoading, authError } = useAuth();

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
        signIn(loginData.email, loginData.password, location, history);
        event.preventDefault();
    };

    const handleGoogleSignin = () => {
        googleSignIn(location, history);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: '150px' }} item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">Log In</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        
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

                        <NavLink to="/resister"><Button>New user? Please Resister</Button></NavLink>
                        <Button sx={{ width: '66%', mt: 2 }} type="submit" variant="contained">Log In</Button>
                        <Typography sx={{ my: 2 }}  variant="h6" gutterBottom component="div">Or</Typography>
                        <Button onClick={handleGoogleSignin} variant="contained">Sign in with Google</Button>
                    </form>

                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">Login Successful!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '90%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;