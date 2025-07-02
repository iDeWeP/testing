import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledPopover color="surface">SURFACE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="neutral">NEUTRAL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="primary">PRIMARY</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="secondary">
        SECONDARY
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="tertiary">TERTIARY</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="success">SUCCESS</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="warning">WARNING</ExampleUnstyledPopover>
      <ExampleUnstyledPopover color="error">ERROR</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
