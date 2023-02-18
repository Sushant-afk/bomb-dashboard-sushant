import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import moment from 'moment';
import usebShareStats from '../../hooks/usebShareStats';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import TokenSymbol from '../../components/TokenSymbol';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const formatXD = (val) => {
    if(val >= 1e6) {
        val = val / 1e6;
        val = val.toFixed(4).toString();
        return (val + 'M');
    }
    val = val / 1e3;
    val = val.toFixed(2).toString();
    return (val + 'K');
}


const FinanceSummary = () => {
    const styles = useStyles();
    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();
    const currentEpoch = useCurrentEpoch();
    const cashStat = useCashPriceInEstimatedTWAP();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
    const { to } = useTreasuryAllocationTimes();
    
    const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
    const bombPriceInDollars = useMemo(() => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null), [bombStats]);
    const bShareCirculatingSupply = useMemo(() => (bShareStats ? String(bShareStats.circulatingSupply) : null), [bShareStats]);
    const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
    const bSharePriceInBNB = useMemo(() => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null), [bShareStats]);
    const bSharePriceInDollars = useMemo(() => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null), [bShareStats]);
    const tBondCirculatingSupply = useMemo(() => (tBondStats ? String(tBondStats.circulatingSupply) : null), [tBondStats]);
    const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
    const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
    const tBondPriceInDollars = useMemo(() => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null), [tBondStats]);

    return (
    <div className={styles.root}>
    <Grid container spacing={2}>
     <Grid item xs={12} component={Paper}>
     <Typography style={{ textTransform: 'uppercase', color: '#ffffff' }}>Bomb Finance summary</Typography>
     </Grid>
     <Grid item xs={9} component={Paper}>
        <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right">Current supply</TableCell>
                <TableCell align="right">Total supply</TableCell>
                <TableCell align="right">Price</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key='$BOMB'>
                <TableCell component="th" scope="row">
                 $BOND
                </TableCell>
                <TableCell align="right">{bombCirculatingSupply ? formatXD(bombCirculatingSupply) : '---'}</TableCell>
                <TableCell align="right">{bombTotalSupply ? formatXD(bombTotalSupply) : '---'}</TableCell>
                <TableCell align="right">{bombPriceInBNB ? bombPriceInBNB : '---'} BTC <br></br> $ {bombPriceInDollars ? bombPriceInDollars : ''}</TableCell>
                </TableRow>
                <TableRow key='$BOMB'>
                <TableCell component="th" scope="row">
                    $BSHARE
                </TableCell>
                <TableCell align="right">{bShareCirculatingSupply ? formatXD(bShareCirculatingSupply) : '---'}</TableCell>
                <TableCell align="right">{bShareTotalSupply ? formatXD(bShareTotalSupply) : '---'}</TableCell>
                <TableCell align="right">{bSharePriceInBNB ? bSharePriceInBNB : '---'} BNB <br></br> $ {bSharePriceInDollars ? bSharePriceInDollars : ''}</TableCell>
                </TableRow>
                <TableRow key='$BOMB'>
                <TableCell component="th" scope="row">
                    $BBOND
                </TableCell>
                <TableCell align="right">{tBondCirculatingSupply ? formatXD(tBondCirculatingSupply) : '---'}</TableCell>
                <TableCell align="right">{tBondTotalSupply ? formatXD(tBondTotalSupply) : '---'}</TableCell>
                <TableCell align="right">{tBondPriceInBNB ? tBondPriceInBNB : '---'} BTC <br></br> $ {tBondPriceInDollars ? tBondPriceInDollars : ''} </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
     </Grid>
     <Grid item xs = {3} component={Paper}>
       <Typography style={{ textTransform: 'uppercase', color: '#f9d749' }}>Next Epoch</Typography>
       
       <Typography style={{ textTransform: 'uppercase', color: '#f9d749' }}>Current Epoch</Typography>
       <Typography>{Number(currentEpoch)}</Typography>
       <Typography style={{ textTransform: 'uppercase', color: '#f9d749' }}>
            BOMB PEG <small>(TWAP)</small>
        </Typography>
        <Typography>{scalingFactor} BTC PER 10,000 BOMB</Typography>
     </Grid>
    </Grid>
    </div>
);}

export default FinanceSummary;
