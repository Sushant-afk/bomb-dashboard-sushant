import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
}));


const FinanceSummary = () => {
    const styles = useStyles();

    return (
    <div className={styles.root}>
    <Grid container>
        <Grid item xs={8}>XS=8</Grid>
        <Grid item xs={4}>XS=4</Grid>
    </Grid>
    </div>
);}

export default FinanceSummary;
