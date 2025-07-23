import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBTExample = (): ReactNode => (
  <ExampleSection title="Border BT">
    <ExampleCard>
      <Example bt="unset" />
      <Example bt="none" />
      <Example bt="set" />
    </ExampleCard>
  </ExampleSection>
);
