import * as React from 'react';
import { connect } from 'react-redux';
import Card from 'src/components/Card';
import SunIcon from 'src/components/Icons/SunIcon';
import Text from 'src/components/Text';
import Flex from 'src/components/Flex';
import { AppState } from 'src/store';
import { Dispatch } from 'redux';
import { getExpensesThunk } from 'src/store/expenses/thunk';
import { LoadingState } from 'src/models/loading-state';
import Loader from 'src/components/Loader';
import ErrorIndicator from 'src/components/ErrorIndicator';

type HomeProps = {
  sum?: number;
  loadingState?: LoadingState;
  getExpenses: (pageLimit?: number, offset?: number) => void;
};

const Home: React.FunctionComponent<HomeProps> = ({
  sum,
  loadingState,
  getExpenses,
}) => {
  React.useEffect(() => {
    getExpenses();
  }, []);
  return (
    <Flex flexFlow='column' padding='calc(20px + 5vh) calc(20px + 10vw)'>
      <Card>
        <Flex flexFlow='column' padding='5vh 0 0'>
          {loadingState === 'pending' ? (
            <Loader />
          ) : loadingState === 'failure' ? (
            <ErrorIndicator />
          ) : loadingState === 'success' ? (
            <>
              <SunIcon size='calc(100px + 10vh)' />
              <Flex flexFlow='column'>
                <Text fontStyle='italic' padding='10px'>
                  Good day! Did you sleep well?
                </Text>
                <Text fontStyle='italic' padding='10px'>
                  We have{' '}
                  <Text display='inline' fontWeight='bold'>
                    {sum}
                  </Text>{' '}
                  expenses to work with today. Take your time!
                </Text>
                <Text fontStyle='italic' padding='10px'>
                  when you are ready, go to 'all expenses' and let's rock!
                </Text>
              </Flex>
            </>
          ) : (
            ''
          )}
        </Flex>
      </Card>
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({
  sum: state.expensesState.sum,
  loadingState: state.expensesState.loadingState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getExpenses: () => {
    dispatch(getExpensesThunk());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
