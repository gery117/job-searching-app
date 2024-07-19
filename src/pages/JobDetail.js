import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData'
import Detail from '../components/Detail';
import NearbyJobs from '../components/NearbyJobs';
import JobTabs from '../components/JobTabs';

const tabs =["About", "Qualification", "Responsibilities"];

const JobDetail = () => {
  const [jobDetail, setJobDetail] = useState({});
  const {id} = useParams();

  const [activeTab, setActiveTab] = useState(tabs[0])

  

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
  }, [id])
  


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
        <JobTabs
          tabs={tabs}
          activeTab = {activeTab}
          setActiveTab = {setActiveTab}
        />
        <NearbyJobs
        />
    </Box>
  )
}

export default JobDetail