import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledPopover radius="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="xs">XS</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="sm">SM</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="md">MD</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="lg">LG</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="xl">XL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="xxl">XXL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover radius="full">FULL</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
