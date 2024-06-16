import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom'
import { checkImageURL } from '../utils/ValidImage'


const Jobs = (job) => {
  console.log(job)
  const validImageURL = checkImageURL(job.job.employer_logo)
  ? job.job.employer_logo
  : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

  return (
    <Link className="jobsContainer" to={`/job/${job.job.job_id}`}>
      <Box className="jobsLogo-container"  >
        <img className="jobsLogo-image" src={validImageURL} alt={job.job.employer_name} loading="lazy" />
      </Box>
      <Typography 
        className="company-name"
        fontWeight='700'
        sx={{
          fontSize: {lg:'20px', xs: '15px'}
        }}
      >
        {job.job.employer_name}
      </Typography>
      <Typography 
        className="jobsLogo-title"
        fontWeight='300'
        sx={{
          fontSize: {lg:'20px', xs: '15px'}
        }}
      >
        {job.job.job_title}
      </Typography>
    </Link>
  )
}

export default Jobs