import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        fontSize: '16px', color: '#FFFEFA',
        fontFamily: 'Alata',
        '&:hover': { fontWeight: 'bold', borderBottom: 'solid 2px'},

    },
    RightButtons: {
        display: 'flex', alignItems: 'center', 
        [theme.breakpoints.down('sm')]: {display: 'none'},
        [theme.breakpoints.only('md')]: {display: 'flex'},


    },

    image: {

        [theme.breakpoints.down('sm')]: {width: '150px'},


    },
    Button: {
        height: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '40px',

    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between', 
    },
    AppBar: {
        background: 'unset' , padding: '60px 150px', color: '#FFFEFA', boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {padding: '15px'},
        [theme.breakpoints.only('md')]: {padding: '25px'},


    }
}));
