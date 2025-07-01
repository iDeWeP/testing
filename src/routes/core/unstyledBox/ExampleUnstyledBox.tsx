import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../../../core/components/UnstyledBox/UnstyledBox.types';

type Props = {
  light?: boolean;
} & UnstyledBoxProps<'div'>;

export const ExampleUnstyledBox = ({
  light,
  children = 'UNSTYLED-BOX',
  ...restProps
}: Props) => (
  <UnstyledBox
    variant={light ? 'light' : 'none'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledBox>
);
