import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { SectionProps } from './Section.types';
import { sectionConfig } from './sectionConfig';

export const Section = <E extends ElementType>(
  props: SectionProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('section', sectionConfig.props, props);

  return <UnstyledCard {...mergedProps} />;
};
