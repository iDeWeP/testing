import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledButton size="xs">XS</ExampleUnstyledButton>
      <ExampleUnstyledButton size="sm">SM</ExampleUnstyledButton>
      <ExampleUnstyledButton size="md">MD</ExampleUnstyledButton>
      <ExampleUnstyledButton size="lg">LG</ExampleUnstyledButton>
      <ExampleUnstyledButton size="xl">XL</ExampleUnstyledButton>
      <ExampleUnstyledButton size="xxl">XXL</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
