import type { Loading } from '../../types';

type State = {
  disabled?: boolean;
  loading?: Loading;
};

export const getFocusableState = (
  { disabled, loading }: State,
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
