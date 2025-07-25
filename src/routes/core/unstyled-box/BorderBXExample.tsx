import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBXExample = (): ReactNode => (
  <ExampleSection title="Border BX">
    <ExampleCard>
      <Example bx="unset">UNSET</Example>
      <Example bx="none">NONE</Example>
      <Example bx="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
