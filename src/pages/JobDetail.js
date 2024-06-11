import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData'
import Detail from '../components/Detail';

const JobDetail = () => {
  const [jobDetail, setJobDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchJobData = async()=>{

      const options = {
        params: {
          job_id: id,
          extended_publisher_details: 'false'
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
      const jobDetailData = await fetchData('job-details', options);
      
      


      setJobDetail(jobDetailData.data[0]);
      console.log(jobDetail)
    }


    fetchJobData()
  }, [])
  


  return (
    <Box>
      {/* {jobDetail.employer_name} */}
      <Detail 
        companyLogo= {jobDetail.employer_logo}
        JobTitle= {jobDetail.job_title}
        companyName= {jobDetail.employer_name}
        Country= {jobDetail.job_country}
        Location = {jobDetail.job_city}
        description = {jobDetail.job_description}
        />
    </Box>
  )
}

export default JobDetail