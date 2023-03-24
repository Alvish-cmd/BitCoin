import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

const drawerWidth = 237;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

const VerticalNavbar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {/* vertical Navbar : Dashboard */}
                    <Box sx={{
                        "& > :not(style)": {
                            width: "197px",
                            height: "54px",
                            margin: "12px 0 0 0px",
                            borderRadius: "8px",
                            textTransform: 'none'
                        },

                    }}>
                        <Button variant="contained" >Dashboard</Button>
                    </Box>
                    {/* Vertical Navbar : My Watchlist */}
                    <Box sx={{
                        "& > :not(style)": {
                            width: "197px",
                            height: "54px",
                            margin: "12px 0 0 0px",
                            borderRadius: "8px",
                            textTransform: 'none'
                        },
                    }}>
                        {/* Vertical Navbar : Order */}
                        <Button variant="contained" >My Watchlist</Button>
                    </Box>
                    <Box sx={{
                        "& > :not(style)": {
                            width: "197px",
                            height: "54px",
                            margin: "12px 0 0 0px",
                            borderRadius: "8px",
                            textTransform: 'none',
                            background:"#ffffff",
                            color:"black"
                        },
                    }}>
                        <Button variant="contained" >Orders</Button>
                    </Box>
                </List>
            </Drawer>
        </div>
    );
};

export default VerticalNavbar;