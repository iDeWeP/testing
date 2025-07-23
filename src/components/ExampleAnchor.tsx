import type { ReactNode } from 'react';
import { Paper } from '../core/components/Paper/Paper';
import type { PaperProps } from '../core/components/Paper/Paper.types';

export const ExampleAnchor = ({
  className,
  ...restProps
}: PaperProps<'div'>): ReactNode => (
  <Paper
    variant="solid"
    padding="xs-xs"
    color="primary-on"
    className={`relative ${className}`}
    {...restProps}
  />
);
