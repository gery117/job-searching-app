import { Box, Button } from '@mui/material'
import React from 'react'

const JobFooter = ({url}) => {
    return (
        <Box>
            <Button
                variant="contained"
                color='primary'
                onClick={()=> window.open(url, '_blank')}
            >
                Apply for this job
            </Button>
        </Box>
    )
}

export default JobFooter