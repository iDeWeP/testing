import type { Loading } from '../../types';

export const getFocusable = (isLoading: Loading, isDisabled: boolean) =>
  isDisabled ? 'disabled' : isLoading ? 'none' : 'default';
