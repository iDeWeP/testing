import type { ReactNode } from 'react';
import { CloseButton } from '../../../core/components/CloseButton/CloseButton';
import type { CloseButtonProps } from '../../../core/components/CloseButton/CloseButton.types';

export const Example = (props: CloseButtonProps<'button'>): ReactNode => (
  <CloseButton {...props} />
);
