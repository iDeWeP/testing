import { useContext } from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { CoreComponentsConfig } from '../../contexts/config/config.types';

// CHECL TYPES
export const useMergeProps = <D, P>(
  component: keyof CoreComponentsConfig,
  defaultProps: D,
  props: P
) => {
  const config = useContext(ConfigContext).core?.[component];

  return {
    ...defaultProps,
    ...config?.props,
    ...props,
    configClassName: config?.styles
  };
};
