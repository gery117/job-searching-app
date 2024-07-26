import {useEffect, useState, useContext} from 'react';
import { Box, Button, Stack, TextField, Typography, CircularProgress } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import { AppContext } from './AppContext';

const SearchJob = ({setJobs, jobs}) => {
    const [search, setSearch] = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async()=> {
        if (search) {
            setIsLoading(true);
            setError(null);

            const options = {
                params: {
                    query: search,
                    page: '1',
                    num_pages: '1',
                    date_posted: 'all'
                },
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                }
            };

            try{
                const jobData = await fetchData('search', options);
                console.log(search);
                setSearch('');
                setJobs(jobData.data);
                console.log(jobs);
            }
            catch(err){
                console.error(err);
                setError('Could not fetch jobs. Please try again.')
            }
            finally{
                setIsLoading(false);
            }   
        }
        else{
            setError("Please enter a search term to look for your job")
        }
        
    }

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
                Search All Jobs Here
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
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            {isLoading? (
                <CircularProgress/>
            ): error? (
                <Typography color="error">
                    {error}
                </Typography>
            ) : (    
                <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
                        <HorizontalScrollbar 
                            jobs = {jobs}
                            setJobs={setJobs}
                            />
                </Box>
            )}
        </Stack>
    )
}

export default SearchJob