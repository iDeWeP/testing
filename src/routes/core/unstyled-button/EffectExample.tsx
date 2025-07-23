import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const EffectExample = (): ReactNode => (
  <ExampleSection title="Effect">
    <ExampleCard>
      <Example effect="unset">UNSET</Example>
      <Example effect="shadow">SHADOW</Example>
    </ExampleCard>
  </ExampleSection>
);
