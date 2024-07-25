import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import { checkImageURL } from '../utils/ValidImage';

const Detail = ({ companyLogo, JobTitle, companyName, Country, Location, description, employmentType }) => {

    // console.log(JobTitle)
    const validImageURL = checkImageURL(companyLogo)
    ? companyLogo
    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

    return (
        <Stack className="details-container">
            <Box className="details-logobox">
                <img className="details-logoImage"  src={validImageURL} alt={companyLogo} loading="lazy" />
            </Box>
            <Box className="details-companyNameBox">
                <p className="details-companyName">
                    {companyName}
                </p>
            </Box>
            <Box className="details-jobTitleBox">
                <p className="details-jobTitle">
                    {JobTitle}
                </p>
            </Box>
            <Box className="details-jobTitleBox">
                <p className="details-countryName">
                    {employmentType}
                </p>
            </Box>
            <Box className="details-countryNameBox">
                <p className="details-countryName">
                    {Country}
                </p>
            </Box>
            <Box className="details-locationNameBox">
                <p className="details-locationName">
                    {Location}
                </p>
            </Box>
            <Box className="details-descriptionBox">
                <p className="details-description">
                    {description}
                </p>
            </Box>
        </Stack>
    )
}

export default Detail;