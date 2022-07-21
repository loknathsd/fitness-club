import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
      
    const [search, setSearch] = useState();
    
    const [bodyParts,setBodyParts] = useState([])

    
    useEffect(()=>{
        const fetchBodyPartsData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            setBodyParts(bodyPartsData);
        }
        fetchBodyPartsData();
    },[])


    const handleSearch = async () => {
       if(search){
        
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        console.log(exercisesData)

        const searchedExercises = exercisesData.filter(exercise=>exercise.name.toLowerCase().includes(search)
            ||  exercise.target.toLowerCase().includes(search)
            ||  exercise.equipment.toLowerCase().includes(search)
            ||  exercise.bodyPart.toLowerCase().includes(search)
        );
          console.log(searchedExercises)
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('')
        setExercises(searchedExercises);
        

       }

    }


    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
            <Typography fontWeight="700"
                sx={{
                    fontSize: { lg: '40px', xs: '30px' }
                }}
                mb="50px" textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '800px', xs: '300px' },
                        backgroundColor: 'white',
                        borderRadius: '40px'
                    }}
                    height="73px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"

                />
                <Button className="search-btn"

                    sx={{
                        bgcolor: "#ff2625",
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: "20px", xs: '12px' },
                        height: '56px',
                        position:'absolute',
                        right:'0'

                    }}
                    onClick={handleSearch}

                >
                    Search
                </Button>
             
            </Box>
            <Box sx={{position:'relative' , width:'100%' , p:'20px'}}>
                    <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart ={setBodyPart} />
            </Box>
            
        </Stack>
    );
};

export default SearchExercises;