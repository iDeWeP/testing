import type { Loading } from '../../types';

type States = {
  disabled?: boolean;
  loading?: Loading;
};

export const getFocusableState = (
  { disabled, loading }: States,
  isPeer?: boolean
) => {
  if (disabled) {
    return isPeer ? 'unset' : 'disabled';
  }

  if (loading) {
    return 'loading';
  }

  return isPeer ? 'peer' : 'default';
};
