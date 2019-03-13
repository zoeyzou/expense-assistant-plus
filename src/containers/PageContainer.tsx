import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { User } from 'src/models/user';
import { LoadingState } from 'src/models/loading-state';
import { AppState } from 'src/store';
import { getUserThunk } from 'src/store/user/thunk';
import Avatar from 'src/components/Avatar';
import Flex from 'src/components/Flex';
import Text from 'src/components/Text';
import { getTotalPages } from 'src/store/page-info/selectors';
import { theme } from 'src/utils/theme';
import Loader from 'src/components/Loader';

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
