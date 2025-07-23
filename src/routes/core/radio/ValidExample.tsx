import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ValidExample = (): ReactNode => (
  <ExampleSection title="Valid">
    <ExampleCard>
      <Example valid={false} />
      <Example valid />
    </ExampleCard>
  </ExampleSection>
);
