import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBLExample = (): ReactNode => (
  <ExampleSection title="Border BL">
    <ExampleCard>
      <Example bl="unset">UNSET</Example>
      <Example bl="none">NONE</Example>
      <Example bl="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
