import { UnstyledBox } from '../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../core/components/UnstyledBox/UnstyledBox.types';

export const ExampleAnchor = ({
  className,
  ...restProps
}: UnstyledBoxProps<'div'>) => (
  <UnstyledBox
    variant="solid"
    color="primary-on"
    className={`relative ${className}`}
    {...restProps}
  />
);
