import type { ReactNode } from 'react';
import { Footer } from '../../../core/components/Footer/Footer';
import type { FooterProps } from '../../../core/components/Footer/Footer.types';

export const Example = ({
  children = 'FOOTER',
  ...restProps
}: FooterProps<'footer'>): ReactNode => (
  <Footer {...restProps}>{children}</Footer>
);
