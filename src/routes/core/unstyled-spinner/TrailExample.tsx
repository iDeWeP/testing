import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const TrailExample = (): ReactNode => (
  <ExampleSection title="Trail">
    <ExampleCard>
      <Example trail={false}>FALSE</Example>
      <Example trail>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
