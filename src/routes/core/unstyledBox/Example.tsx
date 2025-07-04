import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../../../core/components/UnstyledBox/UnstyledBox.types';

type Props = {
  clear?: boolean;
} & UnstyledBoxProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-BOX',
  ...restProps
}: Props) => (
  <UnstyledBox
    variant="light"
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledBox>
);
