import type { ReactNode } from 'react';
import { UnstyledCloseButton } from '../../../core/components/UnstyledCloseButton/UnstyledCloseButton';
import type { UnstyledCloseButtonProps } from '../../../core/components/UnstyledCloseButton/UnstyledCloseButton.types';

type Props = {
  clear?: boolean;
} & UnstyledCloseButtonProps<'button'>;

export const Example = ({ clear, ...restProps }: Props): ReactNode => (
  <UnstyledCloseButton
    color={clear ? 'unset' : 'primary'}
    ripple={clear ? 'none' : 'default'}
    {...restProps}
  />
);
