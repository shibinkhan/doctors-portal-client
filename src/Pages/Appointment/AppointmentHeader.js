import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../images/chair.png';
import Calender from '../Shared/Calender/Calender';



const AppointmentHeader = ({ date, setDate }) => {
    
    return (
        <Container style={{ marginTop: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Appointment
                    </Typography>
                    <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;