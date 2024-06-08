import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import Jobs from './Jobs'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import JobCard from './JobCard';

const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
    
        return (
            <Typography onClick={() => scrollPrev()} className="right-arrow">
                <img src={LeftArrowIcon} alt="right-arrow" />
            </Typography>
        );
    };
    
    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
    
        return (
            <Typography onClick={() => scrollNext()} className="left-arrow">
                <img src={RightArrowIcon} alt="right-arrow" />
            </Typography>
        );
    };

const HorizontalScrollbar = ({ jobs, setJobs }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {jobs.map((job, index) => {
                // console.log(job)
                return(
                    <Box
                        key={index}
                        m="0 40px"
                    >
                        {/* {job.employer_name} */}
                        {/* <Jobs 
                            job={job}
                        /> */}
                        <JobCard job={job}
                        />
                    </Box>
                )    
            }
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar