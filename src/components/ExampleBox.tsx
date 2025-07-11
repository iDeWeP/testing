import { UnstyledBox } from '../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../core/components/UnstyledBox/UnstyledBox.types';

export const ExampleBox = ({ ...restProps }: UnstyledBoxProps<'div'>) => (
  <UnstyledBox
    variant="solid"
    color="primary"
    {...restProps}
  />
);
