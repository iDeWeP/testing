import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { TextProps } from './Text.types';
import { textConfig } from './textConfig';

export const Text = <E extends ElementType = 'p'>(props: TextProps<E>) => {
  const mergedProps = useMergeProps('text', textConfig.props, props);

  return <UnstyledTypography {...mergedProps} />;
};
