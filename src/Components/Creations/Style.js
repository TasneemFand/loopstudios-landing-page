import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


    container: {
        padding: '150px', paddingLeft: '180px', paddingBottom: '50px',
        [theme.breakpoints.down('sm')]: { padding: '80px 20px' },


    },

    box1: {
        display: 'flex', marginBottom: '70px', justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: { justifyContent: 'center' },

    },


    box2: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: { display: 'block' },

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
        marginLeft: '40px',
        marginBottom: '40px',
        cursor: 'pointer',
        background: 'none',
        [theme.breakpoints.down('sm')]: { marginLeft: '0px', width: '311px', marginBottom: '30px' },

    },

    button: {
        letterSpacing: '4px',
        color: 'hsl(0, 0%, 0%)',
        position: 'relative',
        right: '4%',
        border: '2px solid',
        borderColor: 'hsl(0, 0%, 41%)',
        width: '150px',
        fontFamily: 'Alata',
        '&:hover': { backgroundColor: 'hsl(0, 0%, 0%)', color: '#FFFEFA', border: 'none' },

    },

    div: {
        position: 'relative',
        '&:hover': { filter: 'opacity(0.4)' },

    },

    Title: {
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontFamily: 'Alata',
        color: '#FFFEFA',
        position: 'absolute',
        top: '70%',
        left: '20%',
        width: '120px',
        [theme.breakpoints.down('sm')]: { top: '25%', left: '10%', fontSize: '18px' },          
    }

}));
