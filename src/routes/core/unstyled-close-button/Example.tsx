import { UnstyledCloseButton } from '../../../core/components/UnstyledCloseButton/UnstyledCloseButton';
import type { UnstyledCloseButtonProps } from '../../../core/components/UnstyledCloseButton/UnstyledCloseButton.types';

type Props = {
  clear?: boolean;
} & UnstyledCloseButtonProps<'button'>;

export const Example = ({ clear, ...restProps }: Props) => (
  <UnstyledCloseButton
    color={clear ? 'unset' : 'primary'}
    ripple={clear ? 'none' : 'normal'}
    {...restProps}
  />
);
