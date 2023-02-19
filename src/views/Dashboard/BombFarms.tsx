import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './utils';

type PropsType = {
  name: String;
  tvl: String;
  dailyReturns: String;
  yourStakeBshare: String; 
  yourStakeDollar: String;
  earnedDollar: String;
  earnedBshare: String;
}

const BombFarms: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container className={styles.board}>
        <Grid item xs={9} className={styles.items}> 
          <div>
            <p style={{ fontSize: '20px' }}> Bomb Farms </p>
            <p style={{ fontSize: '14px' }}> Stake your LP tokens in our farms to earning $BSHARE </p>
          </div> 
        </Grid>
        <Grid item xs={3} className={styles.items} style={{ textAlign: 'right' }}>
        <Button variant="contained" color="default" > Claim all </Button>
        </Grid>
        <TokenCard name={'BOMB-BTCB'} tvl={'12'} dailyReturns={'2.3%'} yourStakeBshare={'124.22'} yourStakeDollar={'$1331'} earnedBshare={'45.45'} earnedDollar={'$1341'}/>
        <TokenCard name={'BSHARE-BNB'} tvl={'12'} dailyReturns={'2.3%'} yourStakeBshare={'124.22'} yourStakeDollar={'$1331'} earnedBshare={'45.45'} earnedDollar={'$1341'}/>
      </Grid>
    </div>
  );
};

const TokenCard: React.FC<PropsType> = ({ name, tvl, dailyReturns, yourStakeBshare, yourStakeDollar, earnedDollar, earnedBshare }) => {
  const styles = useStyles();
  return (
    <Grid container>
      <Grid item xs={8} style={{backgroundColor:'red', fontSize: '22px'}}> {name} </Grid>
      <Grid item xs={4} style={{backgroundColor:'green', textAlign: 'right'}}> TVL: {tvl} </Grid>
      <Grid item xs={2} className={styles.items}> 
        <div>
          Daily Returns: <br/> {dailyReturns}
        </div> 
      </Grid>
      <Grid item xs={2} className={styles.board}> 
        <div>
          Your Stake: <br/> {yourStakeBshare} <br/> {yourStakeDollar}
        </div> 
      </Grid>
      <Grid item xs={2} className={styles.board}>
        <div>
          Earned: <br/> {earnedBshare} <br/> {earnedDollar}
        </div>
      </Grid>
      <Grid item xs={6} className={styles.board}>
        <Button variant="contained" color="default"> Deposit </Button>
        <Button variant="contained" color="default"> Withdraw </Button>
        <Button variant="contained" color="default"> Claim Rewards </Button>
      </Grid>
    </Grid>
  )
}

export default BombFarms;
