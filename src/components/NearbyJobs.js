import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { fetchData } from '../utils/fetchData'

const NearbyJobs = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
          Nearby Jobs
      </Typography>
    </Box>
  )
}

export default NearbyJobs