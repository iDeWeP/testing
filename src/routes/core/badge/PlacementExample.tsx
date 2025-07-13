import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example placement="top-right">TOP-RIGHT</Example>
      <Example placement="top-left">TOP-LEFT</Example>
      <Example placement="bottom-right">BOTTOM-RIGHT</Example>
      <Example placement="bottom-left">BOTTOM-LEFT</Example>
    </ExampleCard>
  </ExampleSection>
);
