import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setIsBooked }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" sx={{}}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                booking={booking}
                date={date}
                setIsBooked={setIsBooked}
            />
        </>
    );
};

export default Bookings;