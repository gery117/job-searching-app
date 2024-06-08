import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Stack, Typography, Box } from '@mui/material'

const JobCard = (job) => {
  console.log(job)
  return (
    <Box className="container">
      <Link className="logo-container" to={`/job/${job.id}`} >
      <img className="logo-image" src={job.job.employer_logo} alt={job.job.employer_name} loading="lazy" />
      </Link>
      <Typography className="company-name">
        {job.job.employer_name}
      </Typography>
    </Box>
  )
}

export default JobCard