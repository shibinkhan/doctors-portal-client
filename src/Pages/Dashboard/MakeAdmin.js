import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const handleMakeAdmin = event => {
        const user = { email };
        fetch('https://radiant-citadel-89261.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                };
            });
        event.preventDefault();
    };
    return (
        <div>
            <h1>MakeAdmin</h1>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    type="email"
                    onBlur={handleEmail}
                    label="Email"
                    variant="standard"
                />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            {success && <Alert severity="success">Admin Made Successful!</Alert>}
        </div>
    );
};

export default MakeAdmin;