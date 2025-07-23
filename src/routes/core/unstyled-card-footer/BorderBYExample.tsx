import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBYExample = (): ReactNode => (
  <ExampleSection title="Border BY">
    <ExampleCard>
      <Example by="unset" />
      <Example by="none" />
      <Example by="set" />
    </ExampleCard>
  </ExampleSection>
);
