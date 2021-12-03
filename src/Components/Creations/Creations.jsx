import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';

// Images for Desktop

import earth from '../../Assets/desktop/image-deep-earth.jpg';
import night from '../../Assets/desktop/image-night-arcade.jpg';
import soccer from '../../Assets/desktop/image-soccer-team.jpg';
import grid from '../../Assets/desktop/image-grid.jpg';
import curiosity from '../../Assets/desktop/image-curiosity.jpg';
import pocket from '../../Assets/desktop/image-pocket-borealis.jpg';
import above from '../../Assets/desktop/image-from-above.jpg';
import fisheye from '../../Assets/desktop/image-fisheye.jpg';


// Images for mobile

import earth2 from '../../Assets/mobile/image-deep-earth.jpg';
import night2 from '../../Assets/mobile/image-night-arcade.jpg';
import soccer2 from '../../Assets/mobile/image-soccer-team.jpg';
import grid2 from '../../Assets/mobile/image-grid.jpg';
import curiosity2 from '../../Assets/mobile/image-curiosity.jpg';
import pocket2 from '../../Assets/mobile/image-pocket-borealis.jpg';
import above2 from '../../Assets/mobile/image-from-above.jpg';
import fisheye2 from '../../Assets/mobile/image-fisheye.jpg';



const Creations = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    let button1 = null;
    let button2 = null;
    let Earth = null;
    let Night = null;
    let Soccer = null;
    let Grid = null;
    let Above = null;
    let Pocket = null;
    let Curiosity = null;
    let Fisheye = null;

    isMobile ? button1 = (null

    ) : button1 = (
        <Button className={classes.button}>SEE ALL</Button>
    );

    isMobile ? button2 = (
        <Button className={classes.button}>SEE ALL</Button>
    ) : button2 = (null
    );

    isMobile ? Earth = (
        <img src={earth2} style={{ marginLeft: '0px' }} alt="" className={classes.image} />

    ) : Earth = (
        <img src={earth} style={{ marginLeft: '0px' }} alt="" className={classes.image} />
    );

    isMobile ? Night = (
        <img src={night2} alt="" className={classes.image} />

    ) : Night = (
        <img src={night} alt="" className={classes.image} />
    );

    isMobile ? Soccer = (
        <img src={soccer2} alt="" className={classes.image} />

    ) : Soccer = (
        <img src={soccer} alt="" className={classes.image} />
    );

    isMobile ? Grid = (
        <img src={grid2} alt="" className={classes.image} />
    ) : Grid = (
        <img src={grid} alt="" className={classes.image} />
    );

    isMobile ? Above = (
        <img src={above2} style={{ marginLeft: '0px' }} alt="" className={classes.image} />
    ) : Above = (
        <img src={above} style={{ marginLeft: '0px' }} alt="" className={classes.image} />
    );

    isMobile ? Pocket = (
        <img src={pocket2} alt="" className={classes.image} />
    ) : Pocket = (
        <img src={pocket} alt="" className={classes.image} />
    );

    isMobile ? Curiosity = (
        <img src={curiosity2} alt="" className={classes.image} />
    ) : Curiosity = (
        <img src={curiosity} alt="" className={classes.image} />
    );

    isMobile ? Fisheye = (
        <img src={fisheye2} alt="" className={classes.image} />
    ) : Fisheye = (
        <img src={fisheye} alt="" className={classes.image} />
    );

    return (
        <section>
            <div className={classes.container}>
                <Box className={classes.box1}>
                    <Typography variant="h5" className={classes.BaseTitle}>Our creations</Typography>
                    {button1}
                </Box>
                <Box className={classes.box2}>
                    <div className={classes.div}>
                        {Earth}
                        <Typography variant="h6" className={classes.Title} >Deep earth</Typography>

                    </div>
                    <div className={classes.div}>
                        {Night}
                        <Typography variant="h6" className={classes.Title} >Night arcade</Typography>

                    </div>
                    <div className={classes.div}>
                        {Soccer}
                        <Typography variant="h6" className={classes.Title} >Soccer team VR</Typography>

                    </div>
                    <div className={classes.div}>
                        {Grid}
                        <Typography variant="h6" className={classes.Title} style={{ width: '100px' }} >The grid</Typography>

                    </div>
                </Box>
                <Box className={classes.box2}>
                    <div className={classes.div}>
                        {Above}
                        <Typography variant="h6" className={classes.Title} style={{ width: '200px' }} >From up above VR</Typography>

                    </div>
                    <div className={classes.div}>
                        {Pocket}
                        <Typography variant="h6" className={classes.Title} >Pocket borealis</Typography>

                    </div>
                    <div className={classes.div}>
                        {Curiosity}
                        <Typography variant="h6" className={classes.Title} >The curiosity</Typography>

                    </div>
                    <div className={classes.div}>
                        {Fisheye}
                        <Typography variant="h6" className={classes.Title} >Make it fisheye</Typography>

                    </div>
                </Box>
                <Box style={{ justifyContent: 'center', display: 'flex', marginTop: '70px', }}>
                    {button2}
                </Box>
            </div>
        </section>
    );
}

export default Creations;