import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { MarkProps } from './Mark.types';
import { markConfig } from './markConfig';

export const Mark = <E extends ElementType = 'span'>(props: MarkProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'mark',
    markConfig.props,
    props
  );

  const mergedClassName = mergeClassName('mark', className);

  return (
    <UnstyledTypography
      className={mergedClassName}
      {...restProps}
    />
  );
};
