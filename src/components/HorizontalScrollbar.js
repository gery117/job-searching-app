import React, {useContext, useRef, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
// import Jobs from './Jobs'
import JobCard from './JobCard';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';


// const LeftArrow = () => {
//         const { scrollPrev } = useContext(VisibilityContext);
    
//         return (
//             <Typography onClick={() => scrollPrev()} className="right-arrow">
//                 <img src={LeftArrowIcon} alt="right-arrow" />
//             </Typography>
//         );
//     };
    
//     const RightArrow = () => {
//         const { scrollNext } = useContext(VisibilityContext);
    
//         return (
//             <Typography onClick={() => scrollNext()} className="left-arrow">
//                 <img src={RightArrowIcon} alt="right-arrow" />
//             </Typography>
//         );
//     };


// const HorizontalScrollbar = ({ jobs, setJobs }) => {

//     return (
//         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//             {jobs.map((job, index) => {
//                 // console.log(job)
//                 return(
//                     <Box
//                         key={index}
//                         m="0 40px"
//                     >
//                         {/* {job.employer_name} */}
//                         {/* <Jobs 
//                             job={job}
//                         /> */}
//                         <JobCard job={job}
//                         />
//                     </Box>
//                 )    
//             }
//             )}
//         </ScrollMenu>
//     )
// }


const HorizontalScrollbar = ({ jobs, setJobs }) => {

    const [scrollPosition, setScrollPosition] = useState(0)
    const containerRef = useRef()

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;

        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft= newScrollPosition;
    }

    return (
        <Box className='relative flex items-center'>
            {/* <FaArrowLeft className=' size-10 opacity-50 cursor-pointer hover:opacity-100' onClick={()=>{handleScroll(- 400)}}/> */}
            <div id='slider' ref={containerRef} className=' w-full h-full overflow-x-scroll scroll scroll-smooth scrollbar-hide px-8 '>
                <Stack direction='row'>
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
            </div>
            {/* <FaArrowRight className='size-10 opacity-50 cursor-pointer hover:opacity-100' onClick={()=>{handleScroll(+ 400)}}/> */}
        </Box>
    )
}

export default HorizontalScrollbar