import type { Loading } from '../../types';

export const getFocusableState = (isDisabled: boolean, isLoading?: Loading) =>
  isDisabled ? 'disabled' : isLoading ? 'none' : 'default';

export const getLoadingState = (loading: Loading) =>
  !loading ? 'none' : loading === true ? 'hide' : 'normal';
