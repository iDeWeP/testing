import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledPopper color="surface">SURFACE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="neutral">NEUTRAL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="primary">PRIMARY</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="secondary">SECONDARY</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="tertiary">TERTIARY</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="success">SUCCESS</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="warning">WARNING</ExampleUnstyledPopper>
      <ExampleUnstyledPopper color="error">ERROR</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
