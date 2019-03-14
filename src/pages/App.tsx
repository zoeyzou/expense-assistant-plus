import * as React from 'react';
import { GlobalStyle } from 'src/utils/global-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Loader from 'src/components/Loader';
import Flex from 'src/components/Flex';

const Home = React.lazy(() => import('./Home'));
const Expenses = React.lazy(() => import('./Expenses'));
const Expense = React.lazy(() => import('./Expense'));

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
            <Flex height='100%'>
              <Menu />
              <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/expenses' render={() => <Expenses />} />
                <Route exact path='/expenses/add' render={() => <Home />} />
                <Route
                  exact
                  path='/expenses/:id'
                  render={(props: any) => <Expense {...props} />}
                />
              </Switch>
            </Flex>
          </Router>
        </React.Suspense>
      </>
    );
  }
}
