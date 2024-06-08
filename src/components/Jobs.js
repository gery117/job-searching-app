import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography} from '@mui/material';

const Jobs = ({item}) => {
  return (
    <Box id="jobs"
      sx={{mt: {lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Stack 
          alignItems="center"
          justifyContent="center"
          sx={{gap:{lg:'110px', xs:'50px'}}}
      >

      </Stack>
    </Box>
  )
}

export default Jobs