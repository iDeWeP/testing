import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ResizeExample = (): ReactNode => (
  <ExampleSection title="Resize">
    <ExampleCard>
      <Example resize={false} />
      <Example resize />
    </ExampleCard>
  </ExampleSection>
);
