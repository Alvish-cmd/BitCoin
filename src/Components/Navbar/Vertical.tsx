import * as React from 'react';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Box } from '@mui/system';



export default function vertical() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap" rel="stylesheet"></link>
    <Box sx={{
      width: '250px',
      height: '93.2vh',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    }}>
    </Box>
    <Button sx={{
      position: 'absolute',
      top: '95px',
      width: '220px',
      color:'white',
      background:'#1994E5',
      height: '58px',
      textTransform: 'none',
      left: '12px',
      fontSize: '20px',
      fontFamily: 'poppins'

    }} variant="contained">
      <HomeOutlinedIcon sx={{ margin: '0 10px 0 0',fontSize:'30px' }} />Dahboard
    </Button>

    {/* WatchList Button Design */}
    <Button sx={{
      position: 'absolute',
      top: '180px',
      width: '220px',
      height: '58px',
      textTransform: 'none',
      left: '12px',
      fontSize: '20px',
      fontFamily: 'poppins',
      color:'#84828A',

    }}>
      <AccountBalanceWalletOutlinedIcon sx={{ margin: '0 15px 0 0',fontSize:'30px' }} /> My WatchList
    </Button>

    {/* Order Button Design */}
    <Button sx={{
      position: 'absolute',
      top: '260px',
      width: '220px',
      height: '58px',
      textTransform: 'none',
      left: '12px',
      fontSize: '20px',
      fontFamily: 'poppins',
      color:'#84828A',

    }}>
      <AddShoppingCartOutlinedIcon sx={{ margin: '0 15px 0 0',fontSize:'30px', }} /> Order
    </Button>
  </>
  );
}