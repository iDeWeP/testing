import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const InvalidExample = (): ReactNode => (
  <ExampleSection title="Invalid">
    <ExampleCard>
      <Example invalid={false}>FALSE</Example>
      <Example invalid>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
