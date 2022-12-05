import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import bodyPartImage from '../assets/icons/body-part.png';
import targetImage from '../assets/icons/target.png';
import equipmentImage from '../assets/icons/equipment.png'




const Detail = ({ exerciseDetail }) => {
    const { name, gifUrl, bodyPart, target, equipment } = exerciseDetail;


    const extraDetail = [
        {
            id: 1,
            name :bodyPart,
            icon : bodyPartImage
        },
        {
            id: 2,
            name :target,
            icon : targetImage
        },
        {
            id: 3,
            name :equipment,
            icon : equipmentImage
        },
        
    ]

    return (
        <Stack gap="45px" sx={{ flexDirection: { lg: 'row' }, p: '30px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{gap :{lg :'20px', xs : '20px'}}}>
                <Typography variant="h3" textTransform="capitalize" fontWeight="500">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.

                </Typography>
                {extraDetail.map((item)=>(
                    <Stack key={item.id} direction="row" gap="24px" alignItems="center" >
                        <Button sx={{background:'#fff2db', borderRadius:'50%', height:'100px',width: '100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}} />
                        </Button>
                        <Typography textTransform="capitalize" variant="h6">
                            {item.name}
                        </Typography>

                    </Stack>
                ))}
            </Stack>
        </Stack>

    );
};

export default Detail;