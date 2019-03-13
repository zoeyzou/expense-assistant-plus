import * as React from 'react';
import 'react-table/react-table.css';
import Flex from 'src/components/Flex';
import TableContainer from 'src/containers/TableContainer';
import Title from 'src/components/Title';
import PageContainer from 'src/containers/PageContainer';

const Expenses: React.FunctionComponent<{}> = () => {
  return (
    <Flex padding='calc(20px + 3vh) calc(20px + 5vw)'>
      <Flex style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Flex flexFlow='column' padding='2% 10%'>
          <Title>ALL EXPENSES</Title>
          <TableContainer />
          <PageContainer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Expenses;
