import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchJob from '../components/SearchJob'
import Jobs from '../components/Jobs'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchJob/>
      <Jobs/>
    </Box>
  )
}

export default Home