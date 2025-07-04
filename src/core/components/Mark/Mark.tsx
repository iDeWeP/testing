import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { MarkProps } from './Mark.types';
import { markConfig } from './markConfig';

export const Mark = <E extends ElementType = 'span'>(props: MarkProps<E>) => {
  const mergedProps = useMergeProps('mark', markConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
