import * as React from 'react';
import ReactTable, { Filter, RowInfo, Column } from 'react-table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'src/store';
import { getExpensesThunk } from 'src/store/expenses/thunk';
import { Expense } from 'src/models/expense';
import 'react-table/react-table.css';
import Flex from 'src/components/Flex';
import Card from 'src/components/Card';
import { getTotalPages } from 'src/store/page-info/selectors';
import { LoadingState } from 'src/models/loading-state';
import { SET_PAGE, SET_PAGE_LIMIT } from 'src/store/page-info/types';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';
import ViewIcon from 'src/components/Icons/ViewIcon';
import { theme } from 'src/utils/theme';
import { Redirect, withRouter, RouteComponentProps } from 'react-router';
import styled from 'src/utils/styled-components';
import * as H from 'history';

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
    if (pageSize && page) {
      getExpenses(pageSize, pageSize * (page - 1));
    }
  }, [pageSize, page]);

  const filterName = (filter: Filter, row: any) => {
    const id: string = filter.id;
    return row[id] !== undefined
      ? String(row[id])
          .toLowerCase()
          .includes(filter.value.toLowerCase())
      : true;
  };

  const filterCurrency = (filter: Filter, row: any) => {
    const id: string = filter.id;

    return filter.value !== 'all'
      ? String(row[id])
          .toLowerCase()
          .includes(filter.value.toLowerCase())
      : true;
  };

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
  };

  const columns: Column<Expense>[] = [
    {
      id: 'index',
      Header: 'Index',
      accessor: (data: Expense) => data.index + 1,
      filterable: false,
      width: 65,
    },
    {
      id: 'date',
      Header: 'Date',
      accessor: (data: Expense) => data.date && data.date.slice(0, 10),
      filterable: false,
      width: 100,
    },
    {
      id: 'employee',
      Header: 'Employee',
      accessor: (data: Expense) =>
        data.user && `${data.user.first} ${data.user.last}`,
      filterMethod: filterName,
      Filter: ({ filter, onChange }) => (
        <TextInput
          onChange={value => onChange(value)}
          defaultValue={filter ? filter.value : ''}
          placeholder='Search'
          height='100%'
          width='100%'
        />
      ),
    },
    {
      id: 'amount',
      Header: 'Amount',
      accessor: (data: Expense) =>
        data.amount && `${data.amount.value}${data.amount.currency}`,
      width: 130,
      filterMethod: filterCurrency,
      Filter: ({ filter, onChange }) => (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : 'all'}
        >
          <option value='all'>Show All</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='DKK'>DKK</option>
        </select>
      ),
    },
    {
      id: 'more',
      Header: 'More',
      Cell: 'More',

      filterable: false,
      accessor: (data: Expense) => (
        <Flex>
          <ViewIcon color={theme.color.orange} />
        </Flex>
      ),
      minWidth: 50,
    },
  ];

  return (
    <ReactTable
      className={`${className}`}
      loading={loadingState === 'pending'}
      data={expenses}
      filterable
      columns={columns}
      pageSize={pageSize}
      // page={page - 1}
      // a hack to fix react table page issue
      // pages={totalPages}
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
  getExpenses: (pageLimit: number, offset: number) => {
    dispatch(getExpensesThunk(pageLimit, offset));
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
