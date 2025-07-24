import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SurplusExample = (): ReactNode => (
  <ExampleSection title="Surplus">
    <ExampleCard>
      <Example
        max={3}
        surplus={false}
      />
      <Example
        max={3}
        surplus
      />
    </ExampleCard>
  </ExampleSection>
);
