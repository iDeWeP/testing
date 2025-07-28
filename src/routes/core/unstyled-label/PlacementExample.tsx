import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = (): ReactNode => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example placement="top">TOP</Example>
      <Example placement="bottom">BOTTOM</Example>
      <Example placement="left">LEFT</Example>
      <Example placement="right">RIGHT</Example>
    </ExampleCard>
  </ExampleSection>
);
