import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBExample = (): ReactNode => (
  <ExampleSection title="Border B">
    <ExampleCard>
      <Example b="unset" />
      <Example b="none" />
      <Example b="set" />
    </ExampleCard>
  </ExampleSection>
);
