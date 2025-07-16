import { Button } from '../../../core/components/Button/Button';
import type { ButtonProps } from '../../../core/components/Button/Button.types';

export const Example = ({
  children = 'BUTTON',
  ...restProps
}: ButtonProps<'button'>) => <Button {...restProps}>{children}</Button>;
