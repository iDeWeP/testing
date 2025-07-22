import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OrientationExample = (): ReactNode => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <Example orientation="row">ROW</Example>
    </ExampleCard>
    <ExampleCard height>
      <Example orientation="col">COL</Example>
    </ExampleCard>
  </ExampleSection>
);
