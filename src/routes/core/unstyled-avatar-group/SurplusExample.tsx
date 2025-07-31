import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SurplusExample = (): ReactNode => (
  <ExampleSection title="Surplus">
    <ExampleCard>
      <Example
        max={3}
        total={10}
        surplus={false}
      >
        FALSE
      </Example>
      <Example
        max={3}
        total={10}
        surplus
      >
        TRUE
      </Example>
    </ExampleCard>
  </ExampleSection>
);
