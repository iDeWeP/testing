import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = (): ReactNode => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example
        max={3}
        total={10}
      />
    </ExampleCard>
  </ExampleSection>
);
