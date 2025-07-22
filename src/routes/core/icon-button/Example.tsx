import type { ReactNode } from 'react';
import { IconButton } from '../../../core/components/IconButton/IconButton';
import type { IconButtonProps } from '../../../core/components/IconButton/IconButton.types';

export const Example = ({
  children = 'ICON-BUTTON',
  ...restProps
}: IconButtonProps<'button'>): ReactNode => (
  <IconButton {...restProps}>{children}</IconButton>
);
