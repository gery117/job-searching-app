import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData } from '../utils/fetchData'
import Detail from '../components/Detail';
import NearbyJobs from '../components/NearbyJobs';
import JobTabs from '../components/JobTabs';
import Specifics from '../components/Specifics';
import JobAbout from '../components/JobAbout';
import JobFooter from '../components/JobFooter';


const tabs =["About", "Qualifications", "Responsibilities"];

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
      console.log(jobDetailData.data)
    }


    fetchJobData()
  }, [id])
  
  const displayTabContent = () => {
    switch(activeTab){
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points = {jobDetail.job_highlights?.Qualifications ?? ['N/A'] }
          />
        );  
      case "About":
        return (
          <JobAbout
            info={jobDetail.job_description ?? "No data provided"}
          />
        );
      case "Responsibilities":
        return(
          <Specifics
            title="Responsibilities"
            points = {jobDetail.job_highlights?.Responsibilities ?? ['N/A'] }
          />
        );
      default:
        return null  
    }
  }

  return (
    <Box>
      {/* {jobDetail.employer_name} */}
      <Detail 
        companyLogo= {jobDetail.employer_logo}
        JobTitle= {jobDetail.job_title}
        employmentType = {jobDetail.job_employment_type}
        companyName= {jobDetail.employer_name}
        Country= {jobDetail.job_country}
        Location = {jobDetail.job_city}
        // description = {jobDetail.job_description}
        />
        <JobTabs
          tabs={tabs}
          activeTab = {activeTab}
          setActiveTab = {setActiveTab}
        />
        {displayTabContent()}
        
        <JobFooter url={ jobDetail.job_apply_link}/>
        {/* <NearbyJobs/> */}
    </Box>
  )
}

export default JobDetail