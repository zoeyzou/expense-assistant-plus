import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'src/store';
import Flex from 'src/components/Flex';
import Text from 'src/components/Text';
import { theme } from 'src/utils/theme';

type PageContainerProps = {
  currentPage: number;
  sum?: number;
  pageSize: number;
};

const PageContainer: React.FunctionComponent<PageContainerProps> = ({
  currentPage,
  sum,
  pageSize,
}) => {
  return (
    <Flex height='auto' justifyContent='space-around' margin='13px 0 0'>
      <Text fontSize={theme.fontSize.sm}>
        {currentPage} / {sum && Math.ceil(sum / pageSize)} page(s)
      </Text>
    </Flex>
  );
};

const mapStateToProps = (state: AppState, ownProps: PageContainerProps) => ({
  currentPage: state.pageInfoState.page,
  sum: state.expensesState.sum,
  pageSize: state.pageInfoState.pageLimit,
});

export default connect(mapStateToProps)(PageContainer);
