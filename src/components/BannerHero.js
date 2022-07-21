import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import  BannerLogo from '../assets/images/banner.png'; 

const BannerHero = () => {
    return (
        <Box sx={{
            mt: { lg: '150px', xs: '70px' },
            ml: { xs: '50px' }
        }} position='relative' padding="20px">
            <Typography color="#FF2625"
                fontWeight="600"
                fontSize="23px"
                mb='15px'
            >
                Fitness Club
            </Typography>
            <Typography fontWeight="700"
                sx={{ fontSize: { lg: '42px', xs: '38px' } }}
            >
                Sweat , Smile <br /> And Repeat
            </Typography>
            <Typography
                fontSize="18px"
                lineHeight="26px"
                 mt='20px'
                 mb='30px'
            >
                Check out the most effective exercises personalized to you</Typography>
            <Button sx={{background:'#ff2625',padding:'10px',textTransform:'none'}} variant="contained" color="error" href="#exercises">Explore Exercises</Button>
            <Typography
             fontWeight="600"
             color="#ff2625"
             sx={{
                opacity:0.1,
                display:{ lg:'block', xs:'none'}
             }}
             fontSize="160px"
            >
                Exercise
            </Typography>
            <img className="hero-banner-img" src={BannerLogo} alt="" />
        </Box>
    );
};

export default BannerHero;