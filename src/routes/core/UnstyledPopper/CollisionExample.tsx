import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const CollisionExample = () => (
  <ExampleSection title="Collision">
    <ExampleCard>
      <ExamplePopper collision="none">NONE</ExamplePopper>
      <ExamplePopper collision="auto">AUTO</ExamplePopper>
      <ExamplePopper collision="flip">FLIP</ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
