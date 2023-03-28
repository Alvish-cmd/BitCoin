import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Vertical  = () =>{
    return (
        <>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: "100vh",
              position:'fixed',
            
            },
          }}
        >
          <Paper  variant="outlined" />
         
        </Box>
        </>
      );
}
export default Vertical