
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    grid: {
        width: '100%', padding: '150px', paddingLeft: '180px', paddingBottom: '50px',
        [theme.breakpoints.down('sm')]: { padding: '80px 20px' },

    },
    BaseTitle: {
        fontSize: '40px', fontFamily: 'Alata',
        fontWeight: 'unset',
        color: 'hsl(0, 0%, 0%)',
        [theme.breakpoints.down('sm')]: { fontSize: '30px', },
        textTransform: 'uppercase',
        lineHeight: '1.1',
        letterSpacing: '4px',


    },

    image: {
        clipPath: 'polygon(0% 15%, 0 15%, 0 0, 100% 0, 100% 28%, 80% 28%, 80% 80%, 80% 80%, 80% 100%, 0 100%, 0 100%, 0% 85%)',
        [theme.breakpoints.down('sm')]: {
            clipPath: 'unset',
            width: '310px',
            height: '100%'
        },

    },
    p: {
        color: 'hsl(0, 0%, 55%)', fontFamily: 'Alata', fontSize: '16px',
        marginTop: '25px',
        fontWeight: 'unset',
        [theme.breakpoints.down('sm')]: { fontSize: '14px', },

    },

    div: {
        position: 'relative',
        top: '57%',
        left: '10%',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
            top: '0', left: '0', width: 'auto',
            padding: '15px',
            textAlign: 'center',marginTop: '15%'
},


    },


}));
