import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent="space-around"
      sx={{gap:{sm: '122px', xs: '40px'}, 
        mt:{sm: '32px', xs:'20px'}, 
        justifyContent: 'none'}}
      px="20px"  
    >
      <Link to="/">
        <img src={logo} alt="logo" style={{
          width:"80px", height: "80px", margin: "0 10px"
        }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: '#3A1212', 
          borderBottom: '3px solid #FF2625 '}}
          >
            Home
        </Link>
        <a href="#jobs" style={{
          textDecoration: 'none', color:"#3A1212"
        }}>
          Jobs
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar