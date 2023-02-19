import { Button, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useStyles } from './utils';

import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';

import {getDisplayBalance} from '../../utils/formatBalance';
import TokenSymbol from '../../components/TokenSymbol';
import {Bank} from '../../bomb-finance';
import useBombStats from '../../hooks/useBombStats';
import useShareStats from '../../hooks/usebShareStats';
import useBank from '../../hooks/useBank';

interface HarvestProps {
  bank: Bank;
}

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

  //bomb earnings
  // const bombBank = useBank('BombBtcbLPBShareRewardPool');
  // const earnings = useEarnings(bombBank.contract, bombBank.earnTokenName, bombBank.poolId);
  // const bombStats = useBombStats();
  // const tShareStats = useShareStats();
  // const tokenStats = bombBank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  // const tokenPriceInDollars = useMemo(() => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null), [tokenStats]);
  // const bombEarnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  // const bombBalanceDisplay = getDisplayBalance(earnings);

  return (
    <div className={styles.root}>
      <Grid container className={styles.boardRoom}>
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
    <Grid container className={styles.boardRoom}>
      <Grid item xs={8} style={{ fontSize: '22px'}}> {name} </Grid>
      <Grid item xs={4} style={{ textAlign: 'right'}}> TVL: {tvl} </Grid>
      <Grid item xs={2} className={styles.items}> 
        <div>
          Daily Returns: <br/> {dailyReturns}
        </div> 
      </Grid>
      <Grid item xs={2} > 
        <div>
          Your Stake: <br/> {yourStakeBshare} <br/> {yourStakeDollar}
        </div> 
      </Grid>
      <Grid item xs={2} >
        <div>
          Earned: <br/> {earnedBshare} <br/> {earnedDollar}
        </div>
      </Grid>
      <Grid item xs={6} >
        <Button variant="contained" color="default" style={{marginRight:'10px'}}> Deposit </Button>
        <Button variant="contained" color="default" style={{marginRight:'10px'}}> Withdraw </Button>
        <Button variant="contained" color="default"> Claim Rewards </Button>
      </Grid>
    </Grid>
  )
}

export default BombFarms;
