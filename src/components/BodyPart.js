import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
    return (
        <Stack
          type='button'
          alignItems ="center"
          justifyContent="center"
          className="bodyPart-card"

          sx={{
            borderTop : bodyPart=== item ? '4px solid #ff2625' : '',
            backgroundColor : '#fff',
            borderBottomLeftRadius : '20px',
            width:'150px',
            height:'200px',
            cursor: 'pointer',
            gap:'40px'
          }}
          onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top:1800, left:100, behavior:'smooth'})
          }}
        >
            <img src={Icon} alt="gym" style={{height:'40px', width:'40px'}} />
            <Typography>
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;