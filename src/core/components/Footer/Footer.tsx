import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledPaper } from '../UnstyledPaper/UnstyledPaper';
import type { FooterProps } from './Footer.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType>(
  props: FooterProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('footer', footerConfig.props, props);

  return <UnstyledPaper {...mergedProps} />;
};
