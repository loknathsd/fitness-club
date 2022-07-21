import { Box } from '@mui/material';
import React, { useState } from 'react';
import BannerHero from '../components/BannerHero';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
    const [exercises,setExercises] = useState([]);
    const [bodyPart,setBodyPart] = useState('all');
    return (
        <Box>
            <BannerHero />
           <SearchExercises 
           setExercises={setExercises}
           bodyPart={bodyPart}
           setBodyPart={setBodyPart}
           />
           <Exercises
             exercises={exercises}
             setExercises={setExercises}
             bodyPart ={bodyPart}
           />
            
        </Box>
    );
};

export default Home;