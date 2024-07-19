import React, { useState } from 'react';
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchJob from '../components/SearchJob'
import PopularJobs from '../components/PopularJobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchJob 
        setJobs = {setJobs}
        jobs = {jobs}
      />
      {/* <PopularJobs
        setJobs = {setJobs}
        jobs = {jobs}
      /> */}
    </Box>
  )
}

export default Home