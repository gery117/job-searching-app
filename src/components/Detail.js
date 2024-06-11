import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import { checkImageURL } from '../utils/ValidImage';

const Detail = ({ companyLogo, JobTitle, companyName, Country, Location, description }) => {

    // console.log(JobTitle)
    const validImageURL = checkImageURL(companyLogo)
    ? companyLogo
    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

    return (
        <Stack>
            <Box>
            <img  src={validImageURL} alt={companyLogo} loading="lazy" />
            </Box>
            <Typography>
                {companyName}
            </Typography>
            <Typography>
                {JobTitle}
            </Typography>
            <Typography>
                {Country}
            </Typography>
            <Typography>
                {Location}
            </Typography>
            <Typography>
                {Country}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </Stack>
    )
}

export default Detail;