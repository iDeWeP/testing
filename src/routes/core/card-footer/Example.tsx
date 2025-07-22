import type { ReactNode } from 'react';
import { CardFooter } from '../../../core/components/CardFooter/CardFooter';
import type { CardFooterProps } from '../../../core/components/CardFooter/CardFooter.types';

export const Example = ({
  children = 'CARD-FOOTER',
  ...restProps
}: CardFooterProps<'div'>): ReactNode => (
  <CardFooter {...restProps}>{children}</CardFooter>
);
