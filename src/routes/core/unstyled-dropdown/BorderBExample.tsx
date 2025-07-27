import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBExample = (): ReactNode => (
  <ExampleSection title="Border B">
    <ExampleCard>
      <Example b="unset">UNSET</Example>
      <Example b="none">NONE</Example>
      <Example b="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
