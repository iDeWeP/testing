import { IconButton } from '../../../core/components/IconButton/IconButton';
import type { IconButtonProps } from '../../../core/components/IconButton/IconButton.types';

export const Example = ({
  children = 'ICON-BUTTON',
  ...restProps
}: IconButtonProps<'button'>) => (
  <IconButton {...restProps}>{children}</IconButton>
);
