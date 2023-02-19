import React from 'react'
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Item } from '@material-ui/core';

import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import FinanceSummary from './FinanceSummary';
import BoardroomSummary from './Boardroom';
import BombFarms from './BombFarms';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const TITLE = 'bomb.money | Dashboard';
  

const Dashboard = () => {
    const { path } = useRouteMatch();
    return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <Container maxWidth="lg">
            <Box mt={5}>
              <div style={{ marginBottom: '45px' }}> <FinanceSummary/> </div>
              <div style={{ marginBottom: '45px' }}> <BoardroomSummary/> </div>
              <BombFarms/>
            </Box>
          </Container>
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
        </Route>
      </Page>
    </Switch>
    )
}

export default Dashboard
