import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../../../core/components/UnstyledBox/UnstyledBox.types';

export const ExampleUnstyledBox = ({
  children = 'UNSTYLED-BOX',
  ...restProps
}: UnstyledBoxProps<'div'>) => (
  <UnstyledBox
    variant="none"
    {...restProps}
  >
    {children}
  </UnstyledBox>
);
