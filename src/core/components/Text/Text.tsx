import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { TextProps } from './Text.types';
import { textConfig } from './textConfig';

export const Text = <E extends ElementType>(props: TextProps<E>): ReactNode => {
  const mergedProps = useMergeProps('text', textConfig.props, props);

  return <UnstyledTypography {...mergedProps} />;
};
