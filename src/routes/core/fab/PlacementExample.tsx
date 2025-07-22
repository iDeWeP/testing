import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = (): ReactNode => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example placement="top-left">TOP-LEFT</Example>
      <Example placement="top-right">TOP-RIGHT</Example>
      <Example placement="bottom-left">BOTTOM-LEFT</Example>
      <Example placement="bottom-right">BOTTOM-RIGHT</Example>
    </ExampleCard>
  </ExampleSection>
);
