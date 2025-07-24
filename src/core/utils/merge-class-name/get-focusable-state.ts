import type { Loading } from '../../types';

type States = {
  loading?: Loading;
  disabled?: boolean;
};

export const getFocusableState = (
  { loading, disabled }: States,
  isPeer?: boolean
): string => {
  if (disabled) {
    return isPeer ? 'unset' : 'disabled';
  }

  if (loading) {
    return 'loading';
  }

  return isPeer ? 'peer' : 'default';
};
