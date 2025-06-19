import type { Loading } from '../../types';

export const getFocusable = (isDisabled: boolean, isLoading?: Loading) =>
  isDisabled ? 'disabled' : isLoading ? 'none' : 'default';
