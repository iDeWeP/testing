import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const CollisionExample = () => (
  <ExampleSection title="Collision">
    <ExampleCard>
      <ExampleUnstyledPopover collision="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover collision="shift">SHIFT</ExampleUnstyledPopover>
      <ExampleUnstyledPopover collision="flip">FLIP</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
