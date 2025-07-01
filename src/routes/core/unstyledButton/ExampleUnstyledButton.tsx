import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import type { UnstyledButtonProps } from '../../../core/components/UnstyledButton/UnstyledButton.types';

type Props = {
  clear?: boolean;
} & UnstyledButtonProps<'button'>;

export const ExampleUnstyledButton = ({
  clear,
  children = 'UNSTYLED-BUTTON',
  ...restProps
}: Props) => (
  <UnstyledButton
    variant={clear ? 'none' : 'light'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledButton>
);
