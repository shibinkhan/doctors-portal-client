import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setIsBooked }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleAppointmentOnBlur = event => {
        const keyName = event.target.name;
        const value = event.target.value;
        // console.log(keyName, value);
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[keyName] = value;
        // console.log(newBookingInfo);
        setBookingInfo(newBookingInfo);
    };

    const handleBookingSubmit = event => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        };
        // console.log(appointment);
        // send to server
        fetch('https://radiant-citadel-89261.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setIsBooked(true);
                    handleBookingClose();
                }
            });
        event.preventDefault();
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Name"
                            onBlur={handleAppointmentOnBlur}
                            name="patientName"
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Email"
                            onBlur={handleAppointmentOnBlur}
                            name="email"
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Your Number"
                            onBlur={handleAppointmentOnBlur}
                            name="phone"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            label="Date"
                            name="date"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            label="Time"
                            name="time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <Button type="submit" variant="contained" sx={{}}>Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;