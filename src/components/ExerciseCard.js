import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

            <Stack direction="row">
                <Button sx={{ml:'21px', color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ml:'21px', color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                    {exercise.target}
                </Button>
                
            </Stack>
           <Typography ml="21px" fontWeight="bold" fontSize="18px" color="#000" textTransform="capitalize" mt="15px" pb="10px">
              {exercise.name} 
            </Typography>            
        </Link>
    );
};

export default ExerciseCard;