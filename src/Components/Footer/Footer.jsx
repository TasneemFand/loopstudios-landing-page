import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './Style';
import FacebookIcon from '../../Assets/icon-facebook.svg';
import instagramiIcon from '../../Assets/icon-instagram.svg';
import pinterestIcon from '../../Assets/icon-pinterest.svg';
import twitterIcon from '../../Assets/icon-twitter.svg';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/logo.svg';

const Footer = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    let div = null;

    isMobile ? div = (
        null
    ) : div = (
        <div style={{ display: 'flex' }}>
            <div className={classes.icons} style={{ marginLeft: '0' }} >
                <img src={FacebookIcon} className={classes.icon} />
            </div>
            <div className={classes.icons} >
                <img src={instagramiIcon} className={classes.icon} />
            </div>
            <div className={classes.icons} >
                <img src={twitterIcon} className={classes.icon} />
            </div>
            <div className={classes.icons} >
                <img src={pinterestIcon} className={classes.icon} />
            </div>
        </div>
    );

    return (
        <div style={{ backgroundColor: 'hsl(0, 0%, 0%)' }}>
            <div style={{ padding: '30px 20px' }}>
                <Box className={classes.box}>
                    <img className={classes.image} src={logo} alt="logo" />
                    {div}
                </Box>
                <Box className={classes.box2}>
                    <div className={classes.divmobile}>
                        <div className={classes.div} style={{ marginLeft: '0' }}  >
                            <Typography variant='h6' className={classes.title}>
                                About
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Careers
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Events
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Products
                            </Typography>
                        </div>
                        <div className={classes.div} >
                            <Typography variant='h6' className={classes.title}>
                                Support
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.divIcons}>
                        <div className={classes.icons} style={{ marginLeft: '0' }} >
                            <img src={FacebookIcon} className={classes.icon} />
                        </div>
                        <div className={classes.icons} >
                            <img src={instagramiIcon} className={classes.icon} />
                        </div>
                        <div className={classes.icons} >
                            <img src={twitterIcon} className={classes.icon} />
                        </div>
                        <div className={classes.icons} >
                            <img src={pinterestIcon} className={classes.icon} />
                        </div>
                    </div>
                    <div className={classes.div2}>
                        <Typography variant='h6' className={classes.title2}>
                            © 2021 Loopstudios. All rights reserved.
                        </Typography>
                    </div>
                </Box>
                <div className={classes.attribution}>
                    <span>Challenge by</span> <a className={classes.a} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
                    <span>Coded by</span> <a className={classes.a} href="#">Tasnim Fandakli.</a>
                </div>

            </div>

        </div>

    );
}

export default Footer;