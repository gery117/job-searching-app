import React from 'react'
import { Box, Button, Stack } from '@mui/material';

const TabButton=({tab, activeTab, onHandleSearchType})=>{
  return (
    <Button
      variant={activeTab === tab ? 'contained' : 'outlined'}
      onClick={onHandleSearchType}
      style={{ margin: '0', padding: '8px 16px' }}
    >
      {tab}
    </Button>  
  )
}


const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 2,
        whiteSpace: 'nowrap',
        padding: '8px 0',
        justifyContent: 'center'
      }}
    >
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          tab={tab}
          activeTab={activeTab}
          onHandleSearchType={() => setActiveTab(tab)}
        />
      ))}
    </Box>
  )
}

export default JobTabs