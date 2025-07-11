import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledList } from '../UnstyledList/UnstyledList';
import type { FooterProps } from './Footer.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType>(props: FooterProps<E>) => {
  const mergedProps = useMergeProps('footer', footerConfig.props, props);

  return <UnstyledList {...mergedProps} />;
};
