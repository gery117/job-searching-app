import { Box, Typography } from '@mui/material'
import React from 'react'

const Specifics = ({title, points}) => {
    return (
        <Box>
            <Typography>
                {title}:
            </Typography>
            <Typography>
                {points.map((item, index) => (
                    <Box key={index}>
                        <Typography>
                            {item}
                        </Typography>
                    </Box>
                )
                )}
            </Typography>
        </Box>
    )
}

export default Specifics