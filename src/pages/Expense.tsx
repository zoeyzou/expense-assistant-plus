import * as React from 'react';
import 'react-table/react-table.css';
import Flex from 'src/components/Flex';
import Title from 'src/components/Title';
import { RouteComponentProps } from 'react-router';
import { AppState } from 'src/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  SET_CURRENT_EXPENSE_ID,
  SET_COMMENT,
  SET_FILE,
} from 'src/store/expense/types';
import {
  getExpenseThunk,
  saveCommentThunk,
  saveFileThunk,
} from 'src/store/expense/thunk';
import { Expense } from 'src/models/expense';
import { LoadingState } from 'src/models/loading-state';
import Loader from 'src/components/Loader';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import { saveReceipt } from 'src/utils/api';

type ExpenseProps = RouteComponentProps & {
  expense?: Expense;
  loadingState: LoadingState;
  setExpenseId: (id: string) => void;
  getExpense: (id: string) => void;
  saveComment: (id: string, comment: string) => void;
  saveReceipt: (id: string, file: any) => void;
};

const ExpensePage: React.FunctionComponent<ExpenseProps> = ({
  setExpenseId,
  match,
  expense,
  loadingState,
  getExpense,
  saveComment,
}) => {
  const id: string = match && match.params && match.params.id;

  React.useEffect(() => {
    if (id) setExpenseId(id);

    getExpense(id);
  }, []);

  const [text, changeText] = React.useState((expense && expense.comment) || '');

  const [file, changeFile] = React.useState('');

  const saveHandler = () => {
    console.log(file);
    saveComment(id, text);
    saveReceipt(id, file);
  };

  return (
    <Flex padding='calc(20px + 3vh) calc(20px + 5vw)'>
      <Flex style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Flex flexFlow='column' padding='2% 10%'>
          <Title>Expense Details</Title>
          {loadingState === 'pending' ? (
            <Loader />
          ) : (
            <Flex justifyContent='space-around' height='auto'>
              <Text>{expense && expense.date.slice(0, 10)}</Text>
              <Text>
                {expense && expense.user.first} {expense && expense.user.last}
              </Text>
            </Flex>
          )}
          <Flex>
            <textarea
              placeholder='Leave a comment for this expense'
              value={text}
              onChange={e => changeText(e.target.value)}
            />
          </Flex>
          <Flex>
            <input
              type='file'
              name=''
              id=''
              onChange={event => changeFile(event.target.files[0])}
            />
          </Flex>
          <Flex>
            <Button label='Save' onClick={saveHandler} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state: AppState) => ({
  expense: state.expenseState.expense,
  loadingState: state.expenseState.loadingState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setExpenseId: (id: string) => {
    dispatch({
      type: SET_CURRENT_EXPENSE_ID,
      payload: {
        id: id,
      },
    });
  },
  getExpense: (id: string) => {
    dispatch(getExpenseThunk(id));
  },
  saveComment: (id: string, comment: string) => {
    dispatch({
      type: SET_COMMENT,
      payload: {
        comment: comment,
      },
    });
    dispatch(saveCommentThunk(id, comment));
  },
  saveReceipt: (id: string, file: any) => {
    dispatch({
      type: SET_FILE,
      payload: {
        file: file,
      },
    });
    dispatch(saveFileThunk(id, file));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensePage);
