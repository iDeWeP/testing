import { Section } from '../../../core/components/Section/Section';
import type { SectionProps } from '../../../core/components/Section/Section.types';

export const Example = ({
  children = 'SECTION',
  ...restProps
}: SectionProps<'section'>) => <Section {...restProps}>{children}</Section>;
