import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledList } from '../UnstyledList/UnstyledList';
import type { SectionProps } from './Section.types';
import { sectionConfig } from './sectionConfig';

export const Section = <E extends ElementType>(props: SectionProps<E>) => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <UnstyledList {...mergedProps} />;
};
