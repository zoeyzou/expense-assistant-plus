import * as React from 'react';
import ReactTable, { RowInfo } from 'react-table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'src/store';
import { getExpensesThunk } from 'src/store/expenses/thunk';
import { Expense } from 'src/models/expense';
import 'react-table/react-table.css';
import { getTotalPages } from 'src/store/page-info/selectors';
import { LoadingState } from 'src/models/loading-state';
import { SET_PAGE, SET_PAGE_LIMIT } from 'src/store/page-info/types';
import Button from 'src/components/Button';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'src/utils/styled-components';
import { expensesColumns } from 'src/utils/table-columns';

type TableContainerProps = RouteComponentProps<any> & {
  className?: string;
  loadingState?: LoadingState;
  expenses: Expense[];
  pageSize: number;
  page: number;
  totalPages?: number;
  totalExpenses?: number;
  getExpenses: (pageLimit?: number, offset?: number) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  history?: History;
};

const _TableContainer: React.FunctionComponent<TableContainerProps> = ({
  className,
  loadingState,
  expenses,
  pageSize,
  page,
  totalPages,
  setPage,
  setPageSize,
  getExpenses,
  history,
}) => {
  React.useEffect(() => {
    getExpenses(pageSize, page);
  }, [pageSize, page]);

  const setPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const setNextPage = () => {
    if (totalPages && page < totalPages) {
      setPage(page + 1);
    }
  };

  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
    // while changing page size, page should be initialized
    setPage(1);
  };

  return (
    <ReactTable
      className={`${className}`}
      loading={loadingState === 'pending'}
      data={expenses}
      filterable
      columns={expensesColumns}
      pageSize={pageSize}
      showPageJump={false}
      PreviousComponent={() => (
        <Button label='Previous' onClick={setPreviousPage} />
      )}
      NextComponent={() => <Button label='Next' onClick={setNextPage} />}
      onPageSizeChange={changePageSize}
      getTrProps={(state: any, rowInfo?: RowInfo) => ({
        onClick: () =>
          rowInfo && history.push(`/expenses/${rowInfo.original.id}`),
      })}
    />
  );
};

const TableContainer = styled(_TableContainer)`
  &.ReactTable {
    border: none;
    width: 100%;
    min-height: calc(200px + 10vh);
    max-height: calc(400px + 15vh);

    .rt-table {
      margin-bottom: 10px;
    }

    .rt-thead {
      &.-header {
        .rt-th {
          background-color: ${({ theme }) => theme.color.darkOrange};
          color: ${({ theme }) => theme.color.lightWhite};
          font-size: ${({ theme }) => theme.fontSize.md};
          font-weight: bold;
          font-family: ${({ theme }) => theme.font.title};
        }
      }
    }

    .rt-tbody {
      .rt-tr-group {
        text-align: center;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;
        font-size: ${({ theme }) => theme.fontSize.sm};
        font-family: ${({ theme }) => theme.font.body};

        &:hover {
          background: ${({ theme }) => theme.color.lightOrange};
          color: ${({ theme }) => theme.color.lightWhite};
          transition: all 0.2s ease;
        }

        &:nth-of-type(2n) {
          background-color: ${({ theme }) => theme.color.lightWhite};

          &:hover {
            background-color: ${({ theme }) => theme.color.lightOrange};
            color: ${({ theme }) => theme.color.lightWhite};
          }
        }

        .rt-td {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .-pagination {
      .-pageInfo {
        display: none;
      }
    }
  }
`;

const mapStateToProps = (state: AppState) => ({
  loadingState: state.expensesState.loadingState,
  expenses: state.expensesState.expenses,
  pageSize: state.pageInfoState.pageLimit,
  page: state.pageInfoState.page,
  totalPages: getTotalPages(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getExpenses: (pageLimit: number, page: number) => {
    dispatch(getExpensesThunk(pageLimit, page));
  },
  setPage: (page: number) =>
    dispatch({
      type: SET_PAGE,
      payload: { page: page },
    }),
  setPageSize: (pageSize: number) =>
    dispatch({
      type: SET_PAGE_LIMIT,
      payload: { pageLimit: pageSize },
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TableContainer));
