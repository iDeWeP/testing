import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const InitialsExample = (): ReactNode => (
  <ExampleSection title="Initials">
    <ExampleCard>
      <Example initials={false}>FALSE</Example>
      <Example initials>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
