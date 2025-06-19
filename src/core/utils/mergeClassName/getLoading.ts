import type { Loading } from '../../types';

export const getLoading = (loading: Loading) =>
  !loading ? 'none' : loading === true ? 'hide' : 'normal';
