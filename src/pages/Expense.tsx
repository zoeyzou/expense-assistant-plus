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
import FileUploader from 'src/components/FileUploader';
import TextArea from 'src/components/TextArea';
import { theme } from 'src/utils/theme';
import TableWrapper from 'src/components/TableWrapper';

type ExpenseProps = RouteComponentProps & {
  expense?: Expense;
  loadingState: LoadingState;
  setExpenseId: (id: string) => void;
  getExpense: (id: string) => void;
  saveComment: (id: string, comment: string) => void;
  saveReceipt: (id: string, file: any) => void;
  history?: History;
};

const ExpensePage: React.FunctionComponent<ExpenseProps> = ({
  setExpenseId,
  match,
  expense,
  loadingState,
  getExpense,
  saveComment,
  saveReceipt,
  history,
}) => {
  const id: string = match && match.params && match.params.id;

  React.useEffect(() => {
    if (id) setExpenseId(id);

    getExpense(id);
  }, []);

  const [text, changeText] = React.useState<string>('');

  const [files, changeFiles] = React.useState<FileList | null>(null);

  const saveHandler = () => {
    saveComment(id, text);
    saveReceipt(id, files && files[0]);
  };

  const backHandler = () => {
    history.push(`/expenses`);
  };

  return (
    <Flex padding='calc(20px + 3vh) calc(20px + 5vw)' height='100%'>
      <Flex
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
        height='100%'
      >
        <Flex flexFlow='column' padding='2% 10%'>
          <Title>Expense Details</Title>
          {loadingState === 'pending' ? (
            <Loader />
          ) : (
            <Flex flexFlow='column'>
              <Flex
                justifyContent='space-between'
                height='auto'
                margin='5px auto'
              >
                <Text color={theme.color.orange} fontWeight='bolder'>
                  {expense && expense.date.slice(0, 10)}
                </Text>
                <Text color={theme.color.orange} fontWeight='bolder'>
                  {expense && expense.user.first} {expense && expense.user.last}
                </Text>
              </Flex>
              <TableWrapper flexFlow='column'>
                <>
                  <Flex
                    justifyContent='space-between'
                    padding='12px 10px'
                    height='60px'
                  >
                    <Text style={{ flexBasis: '50%' }}>
                      Category: {(expense && expense.category) || 'N/A'}
                    </Text>
                    <Text style={{ flexBasis: '50%' }}>
                      Email: {(expense && expense.user.email) || 'N/A'}
                    </Text>
                  </Flex>
                  <Flex
                    justifyContent='space-between'
                    padding='12px 10px'
                    height='60px'
                  >
                    <Text style={{ flexBasis: '50%' }}>
                      Merchant: {(expense && expense.merchant) || 'N/A'}
                    </Text>
                    <Text style={{ flexBasis: '50%' }}>
                      Amount:{' '}
                      {`${expense && expense.amount.value}${expense &&
                        expense.amount.currency}` || 'N/A'}
                    </Text>
                  </Flex>
                  <Flex
                    justifyContent='space-between'
                    padding='12px 10px'
                    height='60px'
                  >
                    <Flex
                      justifyContent='flex-start'
                      style={{ flexBasis: '50%' }}
                    >
                      <Text>Receipts: </Text>
                      <FileUploader
                        label={files !== null ? files[0].name : 'Choose a file'}
                        onChange={changeFiles}
                        margin='0 10px'
                      />
                    </Flex>
                    <Flex
                      justifyContent='flex-start'
                      style={{ flexBasis: '50%' }}
                    >
                      <Text fontSize={theme.fontSize.sm}>
                        {expense &&
                          expense.receipts.length > 0 &&
                          expense.receipts.reduce(
                            (acc: string, curr: any, index: number) =>
                              acc + index + ': ' + curr.url + '\n',
                            ''
                          )}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    justifyContent='space-between'
                    padding='12px 10px'
                    height='60px'
                  >
                    <Text>Comments: </Text>
                  </Flex>

                  <TextArea
                    value={(expense && expense.comment) || text}
                    onChange={changeText}
                  />
                </>
              </TableWrapper>
              <Flex justifyContent='space-between' padding='10px'>
                <Button
                  label='Save'
                  intent='primary'
                  onClick={saveHandler}
                  width='200px'
                />
                <Button
                  label='Back'
                  intent='secondary'
                  onClick={backHandler}
                  width='200px'
                />
              </Flex>
            </Flex>
          )}
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
