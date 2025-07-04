import { Footer } from '../../../core/components/Footer/Footer';
import type { FooterProps } from '../../../core/components/Footer/Footer.types';

export const Example = ({
  children = 'FOOTER',
  ...restProps
}: FooterProps<'div'>) => <Footer {...restProps}>{children}</Footer>;
