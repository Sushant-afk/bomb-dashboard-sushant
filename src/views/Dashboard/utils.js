import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    lrBoxes: {
        textAlign: 'center',
    },
    newsBox: {
        color: 'white',
        backgroundColor: '#23284BBF',
        padding: '10px',
        border: '1px solid #728CDF',
        borderRadius: '10px',
        width: '100%',
        marginBottom: '10px'
    },
    rbox: {
        paddingLeft: '10px',
        display: 'flex'
    },
    items: {
        marginBottom: '12px',
    },
    invNow: {
        backgroundColor: '#00ADE880',
        color: 'white',
        border: '0.3px solid #E41A1A',
        padding: '8px',
        fontSize: '24px'
    },
    div3: {
        padding: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: '18px',
        color: 'black',
    },
    board: {
        border: '1px solid #728CDF',
        backgroundColor: '#23284BBF',
        opacity: '75%',
        color: 'white'
    }
}));