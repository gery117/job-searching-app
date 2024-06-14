import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '@mui/material/Pagination';

import { fetchData } from '../utils/fetchData'
import JobCard from './JobCard';

const PopularJobs = ({setJobs, jobs}) => {
  const {id} = useParams();

  useEffect(() => {
    const fetchJobData = async()=>{

      const options = {
        params: {
            query: 'web developer, Germany' ,
            page: '1',
            num_pages: '1',
            date_posted: 'all'
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };
      const jobData = await fetchData('search', options);
      
      setJobs(jobData.data);
      console.log(jobs);
    }


    fetchJobData()
  }, [id])




  return (
    <Box id='popularJobs' sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
          Popular Jobs
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {jobs.map((job, index) => {
                        // console.log(job)
                        return(
                            <Box
                                key={index}
                                m="0 40px"
                            >
                                <JobCard job={job}
                                />
                            </Box>
                        )    
                    }
                    )}
        </Stack>
    </Box>
  )
}

export default PopularJobs