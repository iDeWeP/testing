import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = (): ReactNode => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example placement="start">START</Example>
      <Example placement="end">END</Example>
      <Example placement="center">CENTER</Example>
    </ExampleCard>
  </ExampleSection>
);
