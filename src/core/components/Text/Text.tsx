import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { TextProps } from './Text.types';
import { textConfig } from './textConfig';

export const Text = <E extends ElementType>(props: TextProps<E>) => {
  const mergedProps = useMergeProps('text', textConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
