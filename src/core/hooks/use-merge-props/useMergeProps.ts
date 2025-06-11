import { type ElementType, useContext } from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { CoreComponentsConfig } from '../../contexts/config/config.types';

export const useMergeProps = <D extends object, P extends object>(
  component: keyof CoreComponentsConfig,
  defaultProps: D,
  props: P
): Omit<D & P, 'as'> & { as?: ElementType } => {
  const config = useContext(ConfigContext).core?.[component];

  return {
    ...defaultProps,
    ...config?.props,
    ...props,
    configClassName: config?.styles
  };
};
