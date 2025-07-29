import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { MarkProps } from './Mark.types';
import { markConfig } from './markConfig';

export const Mark = <E extends ElementType>(props: MarkProps<E>): ReactNode => {
  const mergedProps = useMergeProps('mark', markConfig.props, props);

  return <UnstyledTypography {...mergedProps} />;
};
