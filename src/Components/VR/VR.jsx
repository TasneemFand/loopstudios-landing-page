import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';

// Images for Desktop
import image from '../../Assets/desktop/image-interactive.jpg';

// Images for mobile
import imageMobile from '../../Assets/mobile/image-interactive.jpg';

const VR = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    let pic = null;

    isMobile ? pic = (
        <img src={imageMobile} alt="" className={classes.image} />

    ) : pic = (
        <img src={image} alt="" className={classes.image} />
    );

    return (

        <section>
            <Grid container className={classes.grid} >
                <Grid item xs={12} md={6}>
                    {pic}
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.div} >
                        <Typography variant="h5" className={classes.BaseTitle}>The leader in interactive VR</Typography>
                        <Typography className={classes.p}>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.
                        </Typography>
                    </div>

                </Grid>
            </Grid>
        </section>

    );

}

export default VR;


