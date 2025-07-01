import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledButton margin="none">NONE</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="xs">XS</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="sm">SM</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="md">MD</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="lg">LG</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="xl">XL</ExampleUnstyledButton>
      <ExampleUnstyledButton margin="xxl">XXL</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
