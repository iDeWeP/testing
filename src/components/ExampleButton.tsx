import type { ReactNode } from 'react';
import { Button } from '../core/components/Button/Button';
import type { ButtonProps } from '../core/components/Button/Button.types';

export const ExampleButton = (props: ButtonProps<'button'>): ReactNode => (
  <Button {...props} />
);
