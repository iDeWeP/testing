import type { ElementType, ComponentPropsWithRef } from 'react';

export const mergeProps = <
  E extends ElementType,
  D extends object,
  P extends ComponentPropsWithRef<E>
>(
  defaultProps: D,
  props: P
): D & P => ({
  ...defaultProps,
  ...props
});
