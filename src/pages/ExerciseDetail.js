import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos,setExerciseVideos] = useState([]);
    const [targetExercise,seTargetExercise] = useState([])
    const [equipmentExercise,seEquipmentExercise] = useState([])


    const { id } = useParams();
    



    useEffect(() => {
        const fetchExercisesData = async () => {

            const exerciseUrl = `https://exercisedb.p.rapidapi.com`
            const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);

            const youtubeVideos = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
            setExerciseVideos(youtubeVideos.contents);
            
             const targetExerciseData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
             seTargetExercise(targetExerciseData);
          

             const equipmentExerciseData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
             seEquipmentExercise(equipmentExerciseData)

        }
        fetchExercisesData();

    }, [id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} exerciseName={exerciseDetail.name} />
            <SimilarExercises targetExercise={targetExercise} equipmentExercise={equipmentExercise} />
        </Box>
    );
};

export default ExerciseDetail;