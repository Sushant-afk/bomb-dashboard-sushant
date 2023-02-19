import React, { useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import ArrowUpwardRounded from '@material-ui/icons/ArrowUpwardRounded'
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded'
import Button from '@material-ui/core/Button';
import { getDisplayBalance } from '../../utils/formatBalance';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import useBombFinance from '../../hooks/useBombFinance';
import { useStyles } from './utils';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useBombStats from '../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useWithdrawFromBoardroom from '../../hooks/useWithdrawFromBoardroom';
import useModal from '../../hooks/useModal';
import WithdrawModal from '../Bank/components/WithdrawModal';
import useStakeToBoardroom from '../../hooks/useStakeToBoardroom';
import DepositModal from '../Bank/components/DepositModal';
import useTokenBalance from '../../hooks/useTokenBalance';



const BoardroomSummary: React.FC = () => {
    const bombFinance = useBombFinance();
    const styles = useStyles();
    const bombStats = useBombStats();
    const earnings = useEarningsOnBoardroom();
    const tokenBalance = useTokenBalance(bombFinance?.BSHARE);
    const {onStake} = useStakeToBoardroom();
    const { onWithdraw } = useWithdrawFromBoardroom();
    const totalStaked = useTotalStakedOnBoardroom();
    const stakedBalance = useStakedBalanceOnBoardroom();
    // const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
    // const tokenPriceInDollars = useMemo(() => stakedTokenPriceInDollars ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString() : null, [stakedTokenPriceInDollars, stakedBalance]);
    const tokenPriceInDollars = '0.000';
    const _tokenPriceInDollars = useMemo(() => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null), [bombStats]);
    const earnedInDollars = (Number(_tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

    const [onPresentDeposit, onDismissDeposit] = useModal(
        <DepositModal
            max={tokenBalance}
            onConfirm={(value) => {
                onStake(value);
                onDismissDeposit();
            } }
            tokenName={'BShare'} decimals={0}        />,
    );

    const [onPresentWithdraw, onDismissWithdraw] = useModal(
        <WithdrawModal
          max={stakedBalance}
          onConfirm={(value) => {
            onWithdraw(value);
            onDismissWithdraw();
          }}
          tokenName={'BShare'}
        />,
    );

    return (
    <div className={styles.root}>
    <Grid container>
        <Grid item xs={8} className={styles.lrBoxes}>
            <Grid container>
               <Grid item xs={12} className={styles.items}> <div style={{ color: '#9EE6FF', textDecoration: 'underline', textAlign: "right", fontSize: '16px' }}> Read Investment Strategy&gt; </div> </Grid>
               <Grid item xs={12} className={styles.items}> <div className={styles.invNow}> Invest Now </div> </Grid>
               <Grid item xs={12} sm={6} className={styles.items} style={{ paddingRight: "8px" }}> <div className={styles.div3}> <b> Chat on discord </b> </div> </Grid>
               <Grid item xs={12} sm={6} className={styles.items} style={{ paddingLeft: "8px" }}> <div className={styles.div3}> <b> Read docs </b> </div> </Grid>
               <Grid container className={styles.boardRoom}>
                <Grid item xs={8}> 
                 <div style={{display: 'flex', textAlign: 'left'}}>
                 <TokenSymbol symbol="BSHARE" />
                 <p> <span style={{ fontSize: '18px'}}> <b> Boardroom </b> </span> <br/> <span style={{ fontSize: '14px' }}> Stake BSHARE and earn BOMB every epoch </span> </p>
                 </div>
                </Grid>
                <Grid item xs={4}> 
                 <div> TVL: $1,034,101 </div>
                </Grid>
                <hr style={{ color: 'white', width: '90%', height: '0.3' }}/>
                <Grid item xs={12}> <p style={{color:'white', textAlign: 'right'}}> Total Staked: {getDisplayBalance(totalStaked)} </p> </Grid>
                <Grid item xs={2}>  
                 <div style={{ marginTop: '15px' }}>
                  Daily Returns: <br/> 2.3%
                 </div> 
                </Grid>
                <Grid item xs={2}>
                 <div style={{ marginTop: '15px' }}>
                    Your stake: <br/> BSHARE {getDisplayBalance(stakedBalance)} <br/>
                    $ {tokenPriceInDollars}
                 </div>
                </Grid>
                <Grid item xs={2}> 
                    <div style={{ marginTop: '15px' }}>
                     Your earnings: <br/> BSHARE {getDisplayBalance(earnings)} <br/>
                     $ {earnedInDollars}
                    </div>
                </Grid>
                <Grid item xs={6}> 
                 <div>
                  <Button onClick={onPresentDeposit} variant="contained" color="default" style={{margin:'3px'}} endIcon={<ArrowUpwardRounded />}> Deposit </Button>
                  <Button onClick={onPresentWithdraw} variant="contained" color="default" style={{margin:'3px'}} endIcon={<ArrowDownwardRounded />}> Withdraw </Button>
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

export default BoardroomSummary;
