import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledPopper margin="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="xs">XS</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="sm">SM</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="md">MD</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="lg">LG</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="xl">XL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper margin="xxl">XXL</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
