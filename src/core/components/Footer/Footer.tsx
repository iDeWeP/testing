import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { FooterProps } from './Footer.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType>(
  props: FooterProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('footer', footerConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
