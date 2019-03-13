import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LoadingState } from 'src/models/loading-state';
import { AppState } from 'src/store';
import Loader from 'src/components/Loader';
import ErrorIndicator from 'src/components/ErrorIndicator';
import Text from 'src/components/Text';
import Flex from 'src/components/Flex';
import { getExpensesThunk } from 'src/store/expenses/thunk';

type WelcomeTextContainerProps = {
  sum?: number;
  loadingState?: LoadingState;
  getExpenses: (pageLimit?: number, offset?: number) => void;
};

const WelcomeTextContainer: React.FunctionComponent<
  WelcomeTextContainerProps
> = ({ sum, loadingState, getExpenses }) => {
  React.useEffect(() => {
    getExpenses(10, 1); // this page only cares about sum so any arguments are fine
  }, []);
  return (
    <Flex flexFlow='column'>
      {loadingState === 'pending' ? (
        <Loader />
      ) : loadingState === 'failure' ? (
        <ErrorIndicator />
      ) : loadingState === 'success' ? (
        <>
          <Text fontStyle='italic' padding='10px' textAlign='center'>
            Good day! Did you sleep well?
          </Text>
          <Text fontStyle='italic' padding='10px' textAlign='center'>
            We have{' '}
            <Text display='inline' fontWeight='bold'>
              {sum}
            </Text>{' '}
            expenses to work with today. Take your time!
          </Text>
          <Text fontStyle='italic' padding='10px' textAlign='center'>
            when you are ready, go to 'all expenses' and let's rock!
          </Text>
        </>
      ) : (
        <div />
      )}
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({
  sum: state.expensesState.sum,
  loadingState: state.expensesState.loadingState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getExpenses: (pageLimit: number, page: number) => {
    dispatch(getExpensesThunk(pageLimit, page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeTextContainer);
