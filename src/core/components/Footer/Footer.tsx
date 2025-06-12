import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { footerConfig } from './footerConfig';

export const Footer = <E extends ElementType = 'footer'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('footer', footerConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
