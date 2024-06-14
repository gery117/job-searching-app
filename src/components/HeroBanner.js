import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import banner from '../assets/banner.jpg'

const HeroBanner = () => {
    return (
    <Box 
        sx={{
            mt: {lg:'212px', xs:'70px'}, ml: {sm:'50px'}
        }}
        position="relative" p= '20px'
    >
        <Typography color="#158E8D" fontWeight='600' fontSize='26px'>
            Job Search App
        </Typography>
        <Typography 
            fontWeight='700'
            sx={{fontSize: {lg: '44px', xs: '40px'}}}
            mb='23px' mt='30px'
        >
            The best Job <br/> Searching App Today
        </Typography>
        <Typography
            fontSize='22px'
            lineHeight='35px'
            mb={2}
        >
            Find your perfect job
        </Typography>
        <Button 
            href="#popularJobs" 
            variant='contained'
            sx={{
                backgroundColor: "#158E8D",
                padding: '10px'
            }}
        >
            Explore Popular Jobs
        </Button>
        <img 
            src={banner} 
            alt='banner' 
            className='hero-banner-img'
        />
    </Box>
    )
}

export default HeroBanner