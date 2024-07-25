import { Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react'

const Specifics = ({title, points}) => {
    return (
        <Box>
            <Typography>
                {title}:
            </Typography>
            <Typography>
                {points.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <FiberManualRecordIcon style={{fontSize: 8}}/>
                        </ListItemIcon>
                        <ListItemText primary= {item}/>
                    </ListItem>
                )
                )}
            </Typography>
        </Box>
    )
}

export default Specifics