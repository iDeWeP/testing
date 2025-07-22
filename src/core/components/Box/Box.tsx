import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { BoxProps } from './Box.types';
import { boxConfig } from './boxConfig';

export const Box = <E extends ElementType>(props: BoxProps<E>): ReactNode => {
  const mergedProps = useMergeProps('box', boxConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
