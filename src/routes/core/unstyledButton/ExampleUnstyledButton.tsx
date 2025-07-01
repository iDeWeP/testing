import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import type { UnstyledButtonProps } from '../../../core/components/UnstyledButton/UnstyledButton.types';

type Props = {
  light?: boolean;
} & UnstyledButtonProps<'button'>;

export const ExampleUnstyledButton = ({
  light,
  children = 'UNSTYLED-BUTTON',
  ...restProps
}: Props) => (
  <UnstyledButton
    variant={light ? 'light' : 'none'}
    {...restProps}
  >
    {children}
  </UnstyledButton>
);
