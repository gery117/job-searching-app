import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobDetail from './pages/JobDetail'
import Footer from './components/Footer'
import PopularJobs from './components/PopularJobs'
import NearbyJobs from './components/NearbyJobs'



const App = () => {
    return (
        <Box width='400px' sx={{width:{xl: '1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/job/:id' element={<JobDetail/>}/>
            </Routes>
            <PopularJobs/>
            <NearbyJobs/>
            <Footer/>
        </Box>
    )
}

export default App;