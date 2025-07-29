import type { Loading } from '../../types';

type States = {
  loading?: Loading;
  disabled?: boolean;
  clickable?: boolean;
};

export const getFocusableState = (
  { loading, disabled, clickable = true }: States,
  isPeer?: boolean
): string => {
  if (disabled) {
    return isPeer ? 'unset' : clickable ? 'box-disabled' : 'disabled';
  }

  if (loading) {
    return 'loading';
  }

  if (!clickable) {
    return 'unset';
  }

  return isPeer ? 'peer' : 'default';
};
