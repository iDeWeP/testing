import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const CheckedExample = (): ReactNode => (
  <ExampleSection title="Checked">
    <ExampleCard>
      <Example checked={false}>FALSE</Example>
      <Example checked>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
