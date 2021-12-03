import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Basetitle: {
        fontSize: '60px', letterSpacing: '4px', color: '#FFFEFA',
        // marginTop: '70px',
        lineHeight: '1.1',
        fontFamily: 'Alata', textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: { fontSize: '30px' },
        [theme.breakpoints.only('md')]: {
            fontSize: '40px',
            // marginTop: '90px',
        },



    },

    div: {
        padding: '30px',
        paddingLeft: '50px',
        width: '600px',
        border: 'solid 3px',
        borderColor: '#FFFEFA',
        height: '260px',
        position: 'absolute',
        left: '11.5%',
        marginTop: '70px',
        [theme.breakpoints.down('sm')]: { 
            width: '300px',
            height: 'unset',
            paddingLeft: '30px',
            position: 'relative',
            left:'0',
            top: '20%',
            margin: '0 auto'
        },
    },


    cover: {
        // backgroundImage: 'url(' + require('../../Assets/desktop/image-hero.jpg') + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
        height: '680px',
    },

    coverMobile: {

        // backgroundImage: 'url(' + require('../../Assets/Images for sunnyside-agency/mobile/image-header-mobile.jpg') + ')',
        backgroundSize: 'cover', backgroundPosition: 'center',
        height: '590px',

    }





}));
