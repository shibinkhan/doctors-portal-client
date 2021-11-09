import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 75, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
    color: 'white'
}

const Appointmentbanner = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 500, marginTop: -125 }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h5" sx={{ my: 2 }} style={{ color: '#5CE7ED' }} >
                                Apointment
                            </Typography>
                            <Typography variant="h3" sx={{ mb: 2 }} >
                                Make an Apointment Today
                            </Typography>
                            <Typography variant="h6" style={{ fontSize: 14 }} sx={{ mb: 2 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae explicabo quia quam debitis vel aperiam iste aliquam enim molestias id?
                            </Typography>
                            <Button variant="contained" sx={{ mb: 5 }} style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Appointmentbanner;