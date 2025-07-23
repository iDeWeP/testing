import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = (): ReactNode => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Example border="unset">UNSET</Example>
      <Example border="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
