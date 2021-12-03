import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


    box: {

        display: 'flex', padding: '30px 100px', justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: { display: 'block', padding: '30px 20px' }

    },

    box2: {
        display: 'flex', padding: '30px 100px', justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: { display: 'block', padding: '0px 20px' }
    },

    div: {
        marginLeft: '20px', color: '#FFFEFA', cursor: 'pointer', '&:hover': { color: '#FFFEFA' },
        [theme.breakpoints.down('sm')]: { marginLeft: '0px', marginTop: '20px', },
        fontFamily: 'Alata',

    },

    divmobile: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: { display: 'block', textAlign: 'center', '&:nth-child(1)': { marginTop: '0px' } }

    },

    div2: {
        color: 'hsl(0, 0%, 55%)',
        [theme.breakpoints.down('sm')]: { textAlign: 'center' },


    },


    divIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20%',
    },
    icons: {
        marginLeft: '20px',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: { marginBottom: '50px' },
        '&:hover': { borderBottom: '2px solid white' },

    },

    title: {
        fontSize: '16px',
        fontFamily: 'Alata',
        '&:hover': {
            fontWeight: 'bold', borderBottom: 'solid 2px',
        },

        [theme.breakpoints.down('sm')]: { display: 'inline-block', fontSize: '14px' },


    },

    title2: {
        fontSize: '16px',
        fontFamily: 'Alata',
        [theme.breakpoints.down('sm')]: { fontSize: '14px' },
    },

    icon: {
        '&:hover': {
            borderBottom: 'solid 2px'

        },

    },

    image: {
        [theme.breakpoints.down('sm')]: {
            width: '150px', display: 'block',
            margin: '0 auto'
        },

    },

    attribution: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginBottom: '30px'
        },
        display: 'flex', fontFamily: 'Alata',
        justifyContent: 'center',
        '& span': {
            color: '#FFFEFA',
            marginBottom: '7px',
            marginRight: '6px',
        },
        fontSize: '10px', marginTop: '40px',


    },

    a: {

        color: '#ce48ed',
        marginRight: '5px'
    }



}));
