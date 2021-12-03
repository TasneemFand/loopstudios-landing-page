import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import useStyles from './Style';
import SideNav from './SideNav/SideNav';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/logo.svg';

const Header = ({open, setOpen}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let Drawer = null;

    isMobile ? Drawer = (
        <SideNav open = {open} setOpen = {setOpen} />
    ) : Drawer = null;

    return (
        <AppBar position='static' className={classes.AppBar}>
            <Toolbar className={classes.Toolbar}>
                <img className={classes.image} src={logo} alt="logo" />
                <Box display='flex' alignItems='center' position='absolute' right='30px'>
                    <div className={classes.RightButtons}>
                        <div className={classes.Button} >
                            <Typography variant='h6' className={classes.title}>
                                About
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Careers
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Events
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Products
                            </Typography>
                        </div>
                        <div className={classes.Button}>
                            <Typography variant='h6' className={classes.title}>
                                Support
                            </Typography>
                        </div>

                    </div>
                    {Drawer}
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default Header;
