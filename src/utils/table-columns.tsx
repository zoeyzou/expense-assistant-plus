import * as React from 'react';
import { Filter, Column } from 'react-table';
import { Expense } from 'src/models/expense';
import TextInput from 'src/components/TextInput';
import ViewIcon from 'src/components/Icons/ViewIcon';
import Flex from 'src/components/Flex';
import { theme } from 'src/utils/theme';

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

export const expensesColumns: Column<Expense>[] = [
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
