import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const CollisionExample = () => (
  <ExampleSection title="Collision">
    <ExampleCard>
      <ExampleUnstyledPopper collision="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper collision="shift">SHIFT</ExampleUnstyledPopper>
      <ExampleUnstyledPopper collision="flip">FLIP</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
