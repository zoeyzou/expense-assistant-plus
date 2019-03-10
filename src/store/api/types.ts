export type ApiState = {
  fetches: FetchState[];
};

type FetchState = {
  id: number;
  loadingState: LoadingState;
  data?: ErrorInfo;
};
type LoadingState = 'pending' | 'success' | 'fail';
type ErrorInfo = string;

export const Loading_Start = 'Loading_Start';
export const Loading_Success = 'Loading_Success';
export const Loading_Failure = 'Loading_Failure';

type LoadingStartAction = {
  type: typeof Loading_Start;
};

type LoadingSuccessAction = {
  type: typeof Loading_Success;
};

type LoadingFailureAction = {
  type: typeof Loading_Failure;
  payload: {
    data: ErrorInfo;
  };
};

export type ApiActionType =
  | LoadingStartAction
  | LoadingSuccessAction
  | LoadingFailureAction;
