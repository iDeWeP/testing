import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { SectionProps } from './Section.types';
import { sectionConfig } from './sectionConfig';

export const Section = <E extends ElementType>(props: SectionProps<E>) => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
