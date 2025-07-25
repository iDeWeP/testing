import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBTExample = (): ReactNode => (
  <ExampleSection title="Border BT">
    <ExampleCard>
      <Example bt="unset">UNSET</Example>
      <Example bt="none">NONE</Example>
      <Example bt="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
