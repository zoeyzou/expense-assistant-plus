import * as React from 'react';
import 'react-table/react-table.css';
import TableContainer from 'src/containers/TableContainer';
import Title from 'src/components/Title';
import PageContainer from 'src/containers/PageContainer';
import CardWrapper from 'src/layout/CardWrapper';

const Expenses: React.FunctionComponent<{}> = () => {
  return (
    <CardWrapper>
      <Title>ALL EXPENSES</Title>
      <TableContainer />
      <PageContainer />
    </CardWrapper>
  );
};

export default Expenses;
