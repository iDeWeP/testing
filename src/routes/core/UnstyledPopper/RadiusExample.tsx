import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledPopper radius="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="xs">XS</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="sm">SM</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="md">MD</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="lg">LG</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="xl">XL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="xxl">XXL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper radius="full">FULL</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
