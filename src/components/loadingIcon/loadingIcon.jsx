import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingIcon = () =>(
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <span>&nbsp;</span>Loading...
    </Box>
);

export default LoadingIcon;