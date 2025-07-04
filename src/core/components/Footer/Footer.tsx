import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { FooterProps } from './Footer.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType = 'footer'>(
  props: FooterProps<E>
) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'footer',
    footerConfig.props,
    props
  );

  const mergedClassName = mergeClassName('list', className, { orientation });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
