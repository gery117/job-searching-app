import {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchJob = () => {
    const [search, setSearch] = useState('')


    return (
        <Stack 
            alignItems='center' 
            mt='37px'
            justifyContent='center'
            p='20px'
        >
            <Typography 
                fontWeight='700'
                sx={{
                    fontSize:{lg:'44px', xs: '30px'}
                }}
                mb='50px'
                textAlign='center'
            >
                Check Jobs Here
            </Typography>
            <Box 
                position='relative'
                mb="72px"
            >
                <TextField
                    sx={{
                        input: {fontWeight: '700',
                        border: 'none', borderRadius: '4px'    
                        },
                        width: {lg:'800px', xs: '350px'},
                        backgroundColor:'#fff',
                        borderRadius:'40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Jobs"
                    type="text"
                />
                <Button 
                    className='search-btn'
                    sx={{
                        bgcolor: '#158E8D',
                        color: '#fff',
                        textTransform: 'none',
                        width: {lg:'175px', xs:'80px'},
                        fontSize: {lg:'20px', xs: '14px'},
                        height:'56px',
                        position: 'absolute',
                        right: '0'
                    }}
                
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchJob