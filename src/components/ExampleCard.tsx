import type { ReactNode } from 'react';
import { Paper } from '../core/components/Paper/Paper';
import type { PaperProps } from '../core/components/Paper/Paper.types';

type Props = {
  col?: boolean;
  height?: boolean;
} & PaperProps<'div'>;

export const ExampleCard = ({
  col,
  height,
  className,
  ...restProps
}: Props): ReactNode => {
  const mergedClassName = `relative ${
    height ? 'h-[100px]' : ''
  } bg-disabled-100 flex-wrap justify-evenly items-center ${className}`;

  return (
    <Paper
      orientation={col ? 'col' : 'row'}
      gap="xs"
      className={mergedClassName}
      {...restProps}
    />
  );
};
