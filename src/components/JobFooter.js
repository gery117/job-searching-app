import { Box, Button } from '@mui/material'
import React from 'react'

const JobFooter = ({url}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '16px',
                borderTop: '1px solid #e0e0e0',
            }}
        >
            <Button
                variant="contained"
                color='primary'
                onClick={()=> window.open(url, '_blank')}
                sx={{ padding: '8px 16px' }}
            >
                Apply for this job
            </Button>
        </Box>
    )
}

export default JobFooter