import type { ReactNode } from 'react';
import { Section } from '../core/components/Section/Section';
import type { SectionProps } from '../core/components/Section/Section.types';

type Props = {
  title: string;
} & SectionProps<'section'>;

export const ExampleSection = ({ title, children }: Props): ReactNode => {
  const id = title
    .toLowerCase()
    .trim()
    .replace(/\s{2,}/, ' ');

  return (
    <Section
      aria-labelledby={id}
      className="flex flex-col"
    >
      <h1 id={id}>{title}</h1>
      {children}
    </Section>
  );
};
