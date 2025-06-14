import { type ElementType, useContext } from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { CoreComponentsConfig } from '../../contexts/config/config.types';
import type { ComponentRefProps } from '../../types';

export const useMergeProps = <
  E extends ElementType,
  D extends object,
  P extends ComponentRefProps<E>
>(
  component: keyof CoreComponentsConfig,
  defaultProps: D,
  props: P
): D & P => {
  const config = useContext(ConfigContext).core?.[component];

  return {
    ...defaultProps,
    ...config?.props,
    ...props,
    className: `${config?.styles} ${props.className}`
  };
};
