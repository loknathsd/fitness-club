import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})


    const { id } = useParams();
    



    useEffect(() => {
        const fetchExercisesData = async () => {

            const exerciseUrl = `https://exercisedb.p.rapidapi.com`
            const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);

        }
        fetchExercisesData();

    }, [])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;