import type { Loading } from '../../types';

export const getFocusableState = (isDisabled: boolean, isLoading?: Loading) =>
  isDisabled ? 'disabled' : isLoading ? 'none' : 'default';
