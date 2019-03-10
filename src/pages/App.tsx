import * as React from 'react';
import { GlobalStyle } from 'src/utils/global-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Loader from 'src/components/Loader';
import Flex from 'src/components/Flex';

const Home = React.lazy(() => import('./Home'));

export type AppProps = {};

export default class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <>
        <GlobalStyle />
        <React.Suspense
          fallback={
            <Flex>
              <Loader />
            </Flex>
          }
        >
          <Router>
            <Flex>
              <Menu />
              <Switch>
                <Route exact path='/' render={() => <Home />} />
              </Switch>
            </Flex>
          </Router>
        </React.Suspense>
      </>
    );
  }
}
