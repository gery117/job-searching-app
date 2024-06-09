import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Stack, Typography, Box } from '@mui/material'
import { checkImageURL } from '../utils/ValidImage'

const JobCard = (job) => {
  console.log(job)
  const validImageURL = checkImageURL(job.job.employer_logo)
  ? job.job.employer_logo
  : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

  return (
    <Box className="container">
      <Link className="logo-container" to={`/job/${job.id}`} >
      <img className="logo-image" src={validImageURL} alt={job.job.employer_name} loading="lazy" />
      </Link>
      
      <Typography className="company-name">
        {job.job.employer_name}
      </Typography>
    </Box>
  )
}

export default JobCard