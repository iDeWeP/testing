import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example placement="none">NONE</Example>
      <Example placement="center">CENTER</Example>
      <Example placement="top">TOP</Example>
      <Example placement="bottom">BOTTOM</Example>
    </ExampleCard>
  </ExampleSection>
);
