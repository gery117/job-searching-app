import { Box, Typography } from '@mui/material'
import React from 'react'

const JobAbout = ({info}) => {
    return (
        <Box>
            <Typography>
                About the job:
            </Typography>
            <Box sx={{ whiteSpace: 'pre-wrap' }} className='contentBox'>
                <p className='contextText'> 
                    {info}
                </p>
            </Box>    
        </Box>
    )
}

export default JobAbout