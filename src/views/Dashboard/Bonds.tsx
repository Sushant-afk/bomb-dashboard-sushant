import { Grid, Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import TokenSymbol from '../../components/TokenSymbol';
import useBombFinance from '../../hooks/useBombFinance';
import useBondStats from '../../hooks/useBondStats';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';
import { useStyles } from './utils';


const Bonds: React.FC = () => {
  const styles = useStyles();
  const bondStat = useBondStats();
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  return (
    <div className={styles.root}>
      <Grid container className={styles.boardRoom} style={{ padding: '10px' }}>
       <Grid item xs={12}> 
        <div style={{display: 'flex', textAlign: 'left'}}>
        <TokenSymbol symbol="BBOND" />
        <p> <span style={{ fontSize: '18px'}}> <b> Bonds </b> </span> <br/> <span style={{ fontSize: '14px' }}> BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1 </span> </p>
        </div>
       </Grid>
       <Grid item xs={4} className={styles.items}>
        <div style={{ paddingTop: '32px', paddingLeft: '10px'}}>
            <span style={{ fontSize:'14px' }}> Current Price:(Bomb)^2 </span> <br/>
            <span style={{ fontSize:'21px' }}> BBOND = {bondStat ? Number(bondStat?.tokenInFtm).toFixed(4) : '-'} </span>
        </div>
       </Grid>
       <Grid item xs={4} className={styles.items}>
        <div style={{ paddingTop: '32px'}}>
            <span style={{ fontSize:'14px' }}> Available to redeem: </span> <br/>
            <span style={{ fontSize:'18px' }}> {getDisplayBalance(bondBalance)} </span>
        </div>
       </Grid>
       <Grid item xs={4} className={styles.items}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div> Purchase BBond <br/> <span style={{fontSize:'12px'}}> Bomb is over peg </span> </div>
            <div> <Button variant="contained" color="default" > Purchase </Button> </div>
        </div>
        <hr/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p> Redeem Bomb </p>
            <div> <Button variant="contained" color="default" > Redeem </Button> </div>
        </div>
       </Grid>
     </Grid>
    </div>
  );
};


export default Bonds;
