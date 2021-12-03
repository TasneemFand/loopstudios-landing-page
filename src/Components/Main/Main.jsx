import React from 'react';
import { Typography } from '@material-ui/core';
import Header from '../Header/Header';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
import cover from '../../Assets/desktop/image-hero.jpg';
import coverMobile from '../../Assets/mobile/image-hero.jpg';


const Main = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 375px)');
    const [open, setOpen] = React.useState(false);

    let MainMobile = null;

    let style = null;

    open ? style = {
        backgroundColor: 'hsl(0, 0%, 0%)'

    } : style = {
        backgroundImage: `url(${coverMobile})`
    };




    isMobile ? MainMobile = (
        <div className={classes.coverMobile} style={style}>
            <Header open={open} setOpen={setOpen} />
            <div className={classes.div}>
                <Typography gutterBottom variant="h5" className={classes.Basetitle}>
                    Immersive experiences that deliver
                </Typography>

            </div>
        </div>

    ) : MainMobile = (
        <div className={classes.cover} style={{ backgroundImage: `url(${cover})` }}>
            <Header />
            <div className={classes.div}>
                <Typography gutterBottom variant="h5" className={classes.Basetitle}>
                    Immersive experiences that deliver
                </Typography>

            </div>
        </div>

    );

    return (
        <div className="Main">
            {MainMobile}
        </div>
    );

}

export default Main;
