import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { navigationConfig } from './navigationConfig';

export const Navigation = <E extends ElementType = 'nav'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps(
    'navigation',
    navigationConfig.props,
    props
  );

  return <UnstyledFlexBox {...mergedProps} />;
};
