import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard>
      <ExampleUnstyledPopover margin="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="xs">XS</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="sm">SM</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="md">MD</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="lg">LG</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="xl">XL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover margin="xxl">XXL</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
