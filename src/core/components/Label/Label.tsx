import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { LabelProps } from './Label.types';
import { labelConfig } from './labelConfig';

export const Label = <E extends ElementType = 'label'>(
  props: LabelProps<E>
) => {
  const mergedProps = useMergeProps('label', labelConfig.props, props);

  return <UnstyledTypography {...mergedProps} />;
};
