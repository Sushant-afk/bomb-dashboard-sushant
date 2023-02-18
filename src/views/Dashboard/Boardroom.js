import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import ArrowUpwardRounded from '@material-ui/icons/ArrowUpwardRounded'
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
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

const FinanceSummary = () => {
    const styles = useStyles();

    return (
    <div className={styles.root}>
    <Grid container className={styles.mainBox}>
        <Grid item xs={8} className={styles.lrBoxes}>
            <Grid container>
               <Grid item xs={12} className={styles.items}> <div style={{ color: '#9EE6FF', textDecoration: 'underline', textAlign: "right", fontSize: '16px' }}> Read Investment Strategy&gt; </div> </Grid>
               <Grid item xs={12} className={styles.items}> <div className={styles.invNow}> Invest Now </div> </Grid>
               <Grid item xs={12} sm={6} className={styles.items} style={{ paddingRight: "8px" }}> <div className={styles.div3}> <b> Chat on discord </b> </div> </Grid>
               <Grid item xs={12} sm={6} className={styles.items} style={{ paddingLeft: "8px" }}> <div className={styles.div3}> <b> Read docs </b> </div> </Grid>
               <Grid container style={{ border:'0.5px solid black', backgroundColor: "rgba(35, 40, 75, 0.75)", backdropFilter:"blur(5px)", WebkitBackdropFilter: "blur(5px)", borderRadius:"10px"}}>
                <Grid className={styles.board} item xs={8}> 
                 <div style={{display: 'flex', textAlign: 'left'}}>
                 <TokenSymbol symbol="BSHARE" />
                 <p> <span style={{ fontSize: '18px'}}> <b> Boardroom </b> </span> <br/> <span style={{ fontSize: '14px' }}> Stake BSHARE and earn BOMB every epoch </span> </p>
                 </div>
                </Grid>
                <Grid className={styles.board} item xs={4}> 
                 <div> TVL: $1,034,101 </div>
                </Grid>
                <Grid className={styles.board} item xs={2}> Daily returns 2%  </Grid>
                <Grid className={styles.board} item xs={2}>Your stake: 6.0000 = $1171.62 </Grid>
                <Grid className={styles.board} item xs={2}>Earned: 1660.4413 = $298.88 </Grid>
                <Grid className={styles.board} item xs={6}> 
                 <div>
                  <p style={{color:'white'}}> Total Staked: $103,123 </p>
                  <Button variant="contained" color="default" style={{margin:'3px'}} endIcon={<ArrowUpwardRounded />}> Deposit </Button>
                  <Button variant="contained" color="default" style={{margin:'3px'}} endIcon={<ArrowDownwardRounded />}> Withdraw </Button>
                  <Button variant="contained" color="default" style={{margin:'3px'}} endIcon={<ArrowUpwardRounded />}> Claim Rewards </Button> 
                 </div>
                 </Grid>
               </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4} className={styles.rbox}>
            <div className={styles.newsBox}> Latest news </div>
        </Grid>
    </Grid>
    </div>
);}

export default FinanceSummary;
