import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from './Service';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae accusamus odit voluptatem dignissimos itaque ut earum quaerat minus! Placeat?',
        img: fluride
    },
    {
        name: 'Lorem ipghsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae accusamus odit voluptatem dignissimos itaque ut earum quaerat minus! Placeat?',
        img: cavity
    },
    {
        name: 'Lorem ipsdsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae accusamus odit voluptatem dignissimos itaque ut earum quaerat minus! Placeat?',
        img: whitening
    }
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main'}} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 5, }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;