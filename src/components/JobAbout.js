import { Box, Typography } from '@mui/material'
import React from 'react'

const JobAbout = ({info}) => {
  return (
    <Box>
        <Typography>
            About the job:
        </Typography>
        <Typography>
            {info}
        </Typography>
    </Box>
  )
}

export default JobAbout