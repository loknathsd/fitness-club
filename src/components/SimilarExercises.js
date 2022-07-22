import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({ targetExercise, equipmentExercise }) => {
    console.log(targetExercise, equipmentExercise)
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }} p="50px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '30px' },


                }}
            >
                {
                    targetExercise?.slice(0, 6).map(target => (
                        <ExerciseCard exercise={target}></ExerciseCard>
                    ))
                }
            </Stack>
            <Box mt=" 100px">
                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
                    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> exercises
                </Typography>
                <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
                    sx={{
                        flexDirection: { lg: 'row' },
                        gap: { lg: '30px' },


                    }}
                >
                    {
                        equipmentExercise?.slice(0, 6).map(target => (
                            <ExerciseCard exercise={target}></ExerciseCard>
                        ))
                    }
                </Stack>
                
            </Box>
        </Box>
    );
};

export default SimilarExercises;