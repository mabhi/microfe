import React, {lazy, Suspense, useEffect, useState} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'
const LazyMarketingApp = lazy(() => import('./components/MarketingApp')) 
const LazyAuthApp = lazy(() => import('./components/AuthApp'))
const LazyDashboardApp = lazy(() => import('./components/Dashboard'))

import Progress from './components/Progress';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory()
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  
  useEffect(() => {
    if(isSignedIn){
      history.push("/dashboard")
    }
  },[isSignedIn])
  
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress />}>
            <Switch>
                <Route path="/auth">
                  <LazyAuthApp onSignIn={() => setIsSignedIn(true)}/>  
                </Route>
                <Route path="/dashboard" component={LazyDashboardApp}/>
                <Route path="/" component={LazyMarketingApp}/>
                
            </Switch>
          </Suspense>
          
        </div>
      </StylesProvider>
    </Router>
  );
};
