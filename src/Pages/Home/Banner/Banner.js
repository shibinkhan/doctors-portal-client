import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import chairbg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${chairbg})`,
    marginTop: '20px',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore incidunt modi neque tempore rem debitis consequatur, dolorem atque fugiat doloremque!
                            </Typography>
                            <Button variant="contained" sx={{ mb: 5 }} style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img src={chair} alt="" style={{ width: 400 }}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;