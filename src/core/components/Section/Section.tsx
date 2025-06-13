import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { SectionProps } from './Section.types';
import { sectionConfig } from './sectionConfig';

export const Section = <E extends ElementType = 'section'>(
  props: SectionProps<E>
) => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
