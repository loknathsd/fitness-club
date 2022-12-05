import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ExerciseVideos = ({ exerciseVideos, exerciseName }) => {
    return (
        <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="50px">
            <Typography variant="h3" mb="50px" fontWeight =" bold">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{exerciseName}</span> exercise videos
            </Typography>
            <Stack flexWrap="wrap" justifyContent="center" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row',xs:'row' },
                    gap: '30px'    
                }}
            >
                {
                    exerciseVideos?.slice(0, 6).map((item, index) => (
                        <a
                            key={index}
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="blank"
                            rel="noreferrer"
                            className="exercise-video"
                        >
                            <img style={{borderRadius:'10px'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <h3 style={{color :'red'}}> Play video</h3>
                            <Box>
                                <Typography color=" #000" mb="10px" fontWeight="bold">
                                    {item.video.title}
                                </Typography>
                                <Typography variant="p" color="#000"  >
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>

                    ))
                }
            </Stack>

        </Box>
    );
};

export default ExerciseVideos;