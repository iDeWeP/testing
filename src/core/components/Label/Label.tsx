import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { LabelProps } from './Label.types';
import { labelConfig } from './labelConfig';

export const Label = <E extends ElementType = 'p'>(props: LabelProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'label',
    labelConfig.props,
    props
  );

  const mergedClassName = mergeClassName('label', className);

  return (
    <UnstyledTypography
      className={mergedClassName}
      {...restProps}
    />
  );
};
