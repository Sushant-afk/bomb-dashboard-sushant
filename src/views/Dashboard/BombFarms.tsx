import { Button, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useStyles } from './utils';

import useEarnings from '../../hooks/useEarnings';

import {getDisplayBalance} from '../../utils/formatBalance';
import useBombStats from '../../hooks/useBombStats';
import useShareStats from '../../hooks/usebShareStats';
import useBank from '../../hooks/useBank';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import TokenSymbol from '../../components/TokenSymbol';


type PropsType = {
  name: String;
  tvl: String;
  dailyReturns: String;
  bankId: string;
}

// temporary custom hook to return earnings from any bank
function useFun1 (bankId: string): [String, String] {
  const bank = useBank(bankId);
  const earnings = useEarnings(bank?.contract, bank?.earnTokenName, bank?.poolId);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();
  const tokenStats = bank?.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const tokenPriceInDollars = useMemo(() => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null), [tokenStats]);
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const earnedBshare = getDisplayBalance(earnings);
  return [ earnedInDollars, earnedBshare ];
}


// temporary custom hook to return stakings from any bank
function useFun2(bankId: string): [String, String] {
  const bank = useBank(bankId);
  const stakedBalance = useStakedBalance(bank?.contract, bank?.poolId);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank?.depositTokenName, bank?.depositToken);
  const tokenPriceInDollars = useMemo(() => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null), [stakedTokenPriceInDollars]);
  const yourStakeDollar = (Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance, bank?.depositToken.decimal))).toFixed(2);
  const yourStakeBshare = getDisplayBalance(stakedBalance, bank?.depositToken.decimal);
  return [ yourStakeDollar, yourStakeBshare ];
}

const BombFarms: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container className={styles.boardRoom}>
        <Grid item xs={9} className={styles.items}> 
          <div>
            <span style={{ fontSize: '20px' }}> Bomb Farms </span><br/>
            <span style={{ fontSize: '14px' }}> Stake your LP tokens in our farms to earning $BSHARE </span>
          </div> 
        </Grid>
        <Grid item xs={3} className={styles.items} style={{ textAlign: 'right' }}>
        <Button variant="contained" color="default" > Claim all </Button>
        </Grid>
        <TokenCard name={'BOMB-BTCB'} tvl={'12'} dailyReturns={'2.3%'} bankId={'BombBtcbLPBShareRewardPool'}/>
        <TokenCard name={'BSHARE-BNB'} tvl={'12'} dailyReturns={'2.3%'} bankId={'BshareBnbLPBShareRewardPool'}/>
      </Grid>
    </div>
  );
};

const TokenCard: React.FC<PropsType> = ({ name, tvl, dailyReturns, bankId }) => {
  const styles = useStyles();
  const [ earnedInDollars, earnedBshare ] = useFun1(bankId);
  const [ yourStakeDollar, yourStakeBshare ] = useFun2(bankId);
  return (
    <Grid container style={{ borderBottom: '1px solid #728CDF', paddingTop: '20px', paddingBottom: '10px' }}>
      <Grid item xs={8} style={{ fontSize: '22px', marginBottom: '10px'}}> 
       <div style={{ display:'flex' }}>
       <TokenSymbol symbol={name+'-LP'} size={38}/>
       <p> {name} </p>
       </div>
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'right'}}> TVL: {tvl} </Grid>
      <Grid item xs={2} style={{ fontSize: '14px' }}> 
        <div>
          Daily Returns: <br/> {dailyReturns}
        </div> 
      </Grid>
      <Grid item xs={2} style={{ fontSize: '14px' }}> 
        <div>
          Your Stake: <br/> {yourStakeBshare} <br/> $ {yourStakeDollar}
        </div> 
      </Grid>
      <Grid item xs={2} style={{ fontSize: '14px' }}>
        <div>
          Earned: <br/> {earnedBshare} <br/> $ {earnedInDollars}
        </div>
      </Grid>
      <Grid item xs={6} style={{textAlign: 'right'}}>
        <Button variant="contained" color="default" style={{marginRight:'10px'}}> Deposit </Button>
        <Button variant="contained" color="default" style={{marginRight:'10px'}}> Withdraw </Button>
        <Button variant="contained" color="default"> Claim Rewards </Button>
      </Grid>
    </Grid>
  )
}

export default BombFarms;
