import React from 'react';
import { Drawer, List } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LogoutIcon from '@mui/icons-material/Logout';
import Horizontal from '../Dashboard/Horizontal'
import '../Dashboard/Dashboard.css'


function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}



const VerticalNavbar: React.FC = () => {

    return (
        <>
            <div className='Horizontal-navbar'>
                <Horizontal></Horizontal>
            </div>
            <Box sx={{
                "& > :not(style)": {
                                    backgroundColor:"white",
                                    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                    boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.5)',
                                    height:'100vh',
                                    width:'250px',
                                },

                            }}>
                                  {/* vertical Navbar : Dashboard */}
                            
                        <List >
                        <Box sx={{
                                "& > :not(style)": {
                                    width: "197px",
                                    height: "54px",
                                    margin: "12px 0px 0px 0px",
                                    borderRadius: "8px",
                                    textTransform: 'none'
                                },

                            }}>
                                <Button variant="contained" ><HomeIcon fontSize="small" />&nbsp;&nbsp;Dashboard</Button>
                            </Box>
                          
                            {/* Vertical Navbar : My Watchlist */}
                            <Box sx={{
                                "& > :not(style)": {
                                    width: "197px",
                                    height: "54px",
                                    margin: '12px 0 0 0',
                                    borderRadius: "8px",
                                    textTransform: 'none',
                                    background: "#ffffff",
                                    color: "black"
                                },
                            }}>
                                <Button variant="contained" ><AccountBalanceWalletOutlinedIcon fontSize="small" ></AccountBalanceWalletOutlinedIcon>&nbsp;&nbsp;My Watchlist</Button>
                            </Box>
                            {/* Vertical Navbar : Order */}
                            <Box sx={{
                                "& > :not(style)": {
                                    width: "197px",
                                    height: "54px",
                                    margin: "12px 0 0 0px",
                                    borderRadius: "8px",
                                    textTransform: 'none',
                                    background: "#ffffff",
                                    color: "black"
                                },
                            }}>
                                <Button variant="contained" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>&nbsp;&nbsp;Orders</Button>
                            </Box>
                            {/* Logout button */}
                            <div className="Logout"></div>
                            <Box sx={{
                                "& > :not(style)": {
                                    width: "197px",
                                    height: "54px",

                                    borderRadius: "8px",
                                    textTransform: 'none',
                                    background: "#ffffff",
                                    color: "black"
                                },
                            }}>
                                <Button variant="contained" ><LogoutIcon></LogoutIcon>&nbsp;&nbsp;Log out</Button>
                            </Box>
                        </List>
                        </Box>
        </>
    );
};

export default VerticalNavbar;