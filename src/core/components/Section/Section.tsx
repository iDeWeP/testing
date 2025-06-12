import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { sectionConfig } from './sectionConfig';

export const Section = <E extends ElementType = 'section'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
