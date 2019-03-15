import * as React from 'react';
import 'react-table/react-table.css';
import Flex from 'src/components/Flex';
import Title from 'src/components/Title';
import { RouteComponentProps } from 'react-router';
import { AppState } from 'src/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SET_CURRENT_EXPENSE_ID } from 'src/store/expense/types';
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
import TableWrapper from 'src/layout/TableWrapper';
import CardWrapper from 'src/layout/CardWrapper';
import TwoColumnRow from 'src/layout/TwoColumnRow';
import { reduceArrayOfObjectsToIndexedString } from 'src/utils/helpers';

type ExpenseProps = RouteComponentProps & {
  expense: Expense;
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
  const [text, changeText] = React.useState<string | undefined>(
    expense && expense.comment
  );
  const [files, changeFiles] = React.useState<FileList | null>(null);

  React.useEffect(() => {
    if (id) setExpenseId(id);

    getExpense(id);
  }, []);

  React.useEffect(() => {
    if (expense) {
      changeText(expense.comment);
    }
  }, [expense]);

  const saveHandler = () => {
    if (text) {
      saveComment(id, text);
    }
    if (files) {
      saveReceipt(id, files && files[0]);
    }
  };

  const backHandler = () => {
    history.push(`/expenses`);
  };

  return (
    <CardWrapper>
      {/* title row */}
      <Title>Expense Details</Title>

      {loadingState === 'pending' ? (
        <Loader />
      ) : (
        expense && (
          <Flex flexFlow='column'>
            {/* date and user name row */}
            <TwoColumnRow
              padding='0'
              margin='5px auto'
              height='auto'
              flex='initial'
            >
              <>
                <Text color={theme.color.orange} fontWeight='bolder'>
                  {expense.date.slice(0, 10)}
                </Text>
                <Text color={theme.color.orange} fontWeight='bolder'>
                  {expense.user.first} {expense.user.last}
                </Text>
              </>
            </TwoColumnRow>

            {/* table content */}
            <TableWrapper flexFlow='column'>
              <>
                <TwoColumnRow>
                  <>
                    <Text>Category: {expense.category || 'N/A'}</Text>
                    <Text>Email: {expense.user.email || 'N/A'}</Text>
                  </>
                </TwoColumnRow>

                <TwoColumnRow>
                  <>
                    <Text>Merchant: {expense.merchant || 'N/A'}</Text>
                    <Text>
                      Amount:{' '}
                      {`${expense.amount.value}${expense.amount.currency}` ||
                        'N/A'}
                    </Text>
                  </>
                </TwoColumnRow>

                <TwoColumnRow height='auto'>
                  {/* file uploader row */}
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
                  {/* files uploaded before */}
                  <Flex
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    flex='1 1 50%'
                    maxHeight='100px'
                    overflowY='auto'
                  >
                    <Text fontSize={theme.fontSize.sm}>
                      {expense.receipts.length > 0 &&
                        reduceArrayOfObjectsToIndexedString(expense.receipts)}
                    </Text>
                  </Flex>
                </TwoColumnRow>

                {/* comments */}
                <TwoColumnRow>
                  <Text>Comments: </Text>
                </TwoColumnRow>

                <TextArea value={text} onChange={changeText} />
              </>
            </TableWrapper>

            {/* footer */}
            <TwoColumnRow padding='10px' flex='initial'>
              <Button
                label='Save'
                intent='primary'
                onClick={saveHandler}
                width='200px'
                isDisabled={!text && !files}
              />
              <Button
                label='Back'
                intent='secondary'
                onClick={backHandler}
                width='200px'
              />
            </TwoColumnRow>
          </Flex>
        )
      )}
    </CardWrapper>
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
    dispatch(saveCommentThunk(id, comment));
  },
  saveReceipt: (id: string, file: any) => {
    dispatch(saveFileThunk(id, file));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensePage);
