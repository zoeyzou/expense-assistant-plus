import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { User } from 'src/models/user';
import { LoadingState } from 'src/models/loading-state';
import { AppState } from 'src/store';
import { getUserThunk } from 'src/store/user/thunk';
import Avatar from 'src/components/Avatar';

type AvatarContainerProps = {
  user: User;
  fetchState?: LoadingState;
  getUser: () => void;
};

const AvatarContainer: React.FunctionComponent<AvatarContainerProps> = ({
  user,
  fetchState,
  getUser,
}) => {
  React.useEffect(() => {
    getUser();
  }, []);
  return <Avatar name={user.name} isLoading={fetchState === 'pending'} />;
};

const mapStateToProps = (state: AppState, ownProps: AvatarContainerProps) => ({
  user: state.userState.user,
  fetchState: state.userState.loadingState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getUser: () => {
    dispatch(getUserThunk());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarContainer);
