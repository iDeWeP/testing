import {
  type ElementType,
  type ComponentPropsWithRef,
  useContext
} from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { CoreComponentsConfig } from '../../contexts/config/config.types';
import { mergeClasses } from '../../utils/merge-class-name/merge-classes';
import { useTheme } from '../use-theme/use-theme';

export const useMergeProps = <
  E extends ElementType,
  D extends object,
  P extends ComponentPropsWithRef<E>
>(
  component: keyof CoreComponentsConfig,
  defaultProps: D,
  props: P
): D & P => {
  const config = useContext(ConfigContext).core?.[component];
  const theme = useTheme();

  return {
    theme,
    ...defaultProps,
    ...config?.props,
    ...props,
    className: mergeClasses(config?.styles, props.className)
  };
};
