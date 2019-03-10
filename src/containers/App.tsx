import * as React from 'react';
import { GlobalStyle } from 'src/utils/global-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Loader from 'src/components/Loader';
import AppWrapper from 'src/components/AppWrapper';

const Home = React.lazy(() => import('./Home'));

export type AppProps = {};

export default class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <>
        <GlobalStyle />
        <React.Suspense
          fallback={
            <AppWrapper>
              <Loader />
            </AppWrapper>
          }
        >
          <Router>
            <AppWrapper>
              <Menu />
              <Switch>
                <Route exact path='/' render={() => <Home />} />
              </Switch>
            </AppWrapper>
          </Router>
        </React.Suspense>
      </>
    );
  }
}
