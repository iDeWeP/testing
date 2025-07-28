import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ValidExample = (): ReactNode => (
  <ExampleSection title="Valid">
    <ExampleCard>
      <Example valid={false}>FALSE</Example>
      <Example valid>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
