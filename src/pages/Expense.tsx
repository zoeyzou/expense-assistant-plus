import * as React from 'react';
import 'react-table/react-table.css';
import Flex from 'src/components/Flex';
import Title from 'src/components/Title';
import { RouteComponentProps } from 'react-router';
import { AppState } from 'src/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SET_CURRENT_EXPENSE_ID } from 'src/store/expense/types';

type ExpenseProps = RouteComponentProps & {
  setExpenseId: (id: string) => void;
};

const Expense: React.FunctionComponent<ExpenseProps> = ({
  setExpenseId,
  match,
}) => {
  const id = match && match.params && match.params.id;

  React.useEffect(() => {
    if (id) setExpenseId(id);
  }, []);

  return (
    <Flex padding='calc(20px + 3vh) calc(20px + 5vw)'>
      <Flex style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Flex flexFlow='column' padding='2% 10%'>
          <Title>Expense Details</Title>
        </Flex>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setExpenseId: (id: string) => {
    dispatch({
      type: SET_CURRENT_EXPENSE_ID,
      payload: {
        id: id,
      },
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expense);
