import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBBExample = (): ReactNode => (
  <ExampleSection title="Border BB">
    <ExampleCard>
      <Example bb="unset" />
      <Example bb="none" />
      <Example bb="set" />
    </ExampleCard>
  </ExampleSection>
);
