import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({ targetExercise, equipmentExercise }) => {
    return (
        <Box sx={{ mt: { lg: '70px', xs: '0px' } }} p="50px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="45px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack flexWrap="wrap" justifyContent="center" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: '100px',
                }}
            >
                {
                    targetExercise?.slice(0, 6).map(target => (
                        <ExerciseCard key={target.id} exercise={target}></ExerciseCard>
                    ))
                }
            </Stack>
            <Box mt=" 200px">
                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="45px">
                    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> exercises
                </Typography>
                <Stack flexWrap="wrap" justifyContent="center" alignItems="center"
                    sx={{
                        flexDirection: { lg: 'row' },
                        gap:  '100px',
                    }}
                >
                    {
                        equipmentExercise?.slice(0, 6).map(target => (
                            <ExerciseCard key={target.id} exercise={target}></ExerciseCard>
                        ))
                    }
                </Stack>
                
            </Box>
        </Box>
    );
};

export default SimilarExercises;