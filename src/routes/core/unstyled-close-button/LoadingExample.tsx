import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const LoadingExample = (): ReactNode => (
  <ExampleSection title="Loading">
    <ExampleCard>
      <Example loading={false} />
      <Example loading />
    </ExampleCard>
  </ExampleSection>
);
